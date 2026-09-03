import { create } from "zustand";
import { ChildProfile, ChatMessage, CompletedActivity } from "@/types";

function loadFromStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
}

function saveToStorage(key: string, value: unknown) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // storage full or unavailable
  }
}

interface AppState {
  selectedChild: ChildProfile | null;
  children: ChildProfile[];
  favorites: string[];
  chatMessages: ChatMessage[];
  completedActivities: CompletedActivity[];

  setSelectedChild: (child: ChildProfile | null) => void;
  setChildren: (children: ChildProfile[]) => void;
  addChild: (child: ChildProfile) => void;
  updateChild: (id: string, data: Partial<ChildProfile>) => void;
  removeChild: (id: string) => void;
  toggleFavorite: (activityId: string) => void;
  addChatMessage: (message: ChatMessage) => void;
  clearChat: () => void;
  completeActivity: (childId: string, activityId: string, activity: CompletedActivity["activity"], rating: number) => void;
  loadFromLocalStorage: () => void;
}

export const useAppStore = create<AppState>()((set, get) => ({
  selectedChild: null,
  children: [],
  favorites: [],
  chatMessages: [],
  completedActivities: [],

  loadFromLocalStorage: () => {
    const children = loadFromStorage<ChildProfile[]>("smartkids_children", []);
    const selectedChild = loadFromStorage<ChildProfile | null>("smartkids_selected_child", null);
    const favorites = loadFromStorage<string[]>("smartkids_favorites", []);
    const completedActivities = loadFromStorage<CompletedActivity[]>("smartkids_completed", []);
    set({ children, selectedChild, favorites, completedActivities });
  },

  setSelectedChild: (child) => {
    set({ selectedChild: child });
    saveToStorage("smartkids_selected_child", child);
  },

  setChildren: (children) => {
    set({ children });
    saveToStorage("smartkids_children", children);
  },

  addChild: (child) => {
    const updated = [...get().children, child];
    set({ children: updated });
    saveToStorage("smartkids_children", updated);
  },

  updateChild: (id, data) => {
    const updated = get().children.map((c) => (c.id === id ? { ...c, ...data } : c));
    set({ children: updated });
    saveToStorage("smartkids_children", updated);
    const selected = get().selectedChild;
    if (selected?.id === id) {
      const newSelected = { ...selected, ...data };
      set({ selectedChild: newSelected });
      saveToStorage("smartkids_selected_child", newSelected);
    }
  },

  removeChild: (id) => {
    const updated = get().children.filter((c) => c.id !== id);
    set({ children: updated });
    saveToStorage("smartkids_children", updated);
    if (get().selectedChild?.id === id) {
      set({ selectedChild: null });
      saveToStorage("smartkids_selected_child", null);
    }
  },

  toggleFavorite: (activityId) => {
    const current = get().favorites;
    const updated = current.includes(activityId)
      ? current.filter((id) => id !== activityId)
      : [...current, activityId];
    set({ favorites: updated });
    saveToStorage("smartkids_favorites", updated);
  },

  addChatMessage: (message) => {
    set((state) => ({ chatMessages: [...state.chatMessages, message] }));
  },

  completeActivity: (childId, activityId, activity, rating) => {
    const completed: CompletedActivity = {
      id: Date.now().toString(),
      childId,
      activityId,
      activity,
      rating,
      completedAt: new Date().toISOString(),
    };
    const updated = [...get().completedActivities, completed];
    set({ completedActivities: updated });
    saveToStorage("smartkids_completed", updated);
  },

  clearChat: () => set({ chatMessages: [] }),
}));
