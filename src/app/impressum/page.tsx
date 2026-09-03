import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum gemäß § 5 TMG — SmartKids AI",
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-900 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Zurück zur Startseite
        </Link>

        <h1 className="text-3xl font-bold text-neutral-900 mb-8">Impressum</h1>

        <div className="prose prose-neutral max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">Angaben gemäß § 5 TMG</h2>
            <div className="rounded-xl border border-neutral-200 bg-white p-6 space-y-2 text-sm text-neutral-700">
              <p><strong>SmartKids AI</strong></p>
              <p>Musterstraße 1</p>
              <p>10115 Berlin</p>
              <p>Deutschland</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">Kontakt</h2>
            <div className="rounded-xl border border-neutral-200 bg-white p-6 space-y-2 text-sm text-neutral-700">
              <p>Telefon: +49 (0) 30 12345678</p>
              <p>E-Mail: info@smartkids-ai.com</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <div className="rounded-xl border border-neutral-200 bg-white p-6 space-y-2 text-sm text-neutral-700">
              <p>SmartKids AI</p>
              <p>Musterstraße 1</p>
              <p>10115 Berlin</p>
              <p>Deutschland</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">Streitschlichtung</h2>
            <div className="rounded-xl border border-neutral-200 bg-white p-6 text-sm text-neutral-700 space-y-3">
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:underline ml-1"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">Hinweis zur Nutzung</h2>
            <div className="rounded-xl border border-neutral-200 bg-white p-6 text-sm text-neutral-700 space-y-3">
              <p>
                Diese Anwendung dient ausschließlich als <strong>privates Übungsprojekt</strong> zur
                Erlernung und Vertiefung von Webentwicklung.
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Es werden <strong>keine Einnahmen</strong> erzielt.</li>
                <li>Es werden <strong>keine Werbeanzeigen</strong> geschaltet.</li>
                <li>Es werden <strong>keine Gebühren</strong> erhoben.</li>
                <li>Es findet <strong>kein kommerzieller Betrieb</strong> statt.</li>
              </ul>
              <p>
                Keine der auf dieser Seite bereitgestellten Informationen stellt eine professionelle
                Beratung dar. Für ernsthafte Erziehungsfragen wenden Sie sich bitte an qualifizierte
                Fachleute.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">Haftung für Inhalte</h2>
            <div className="rounded-xl border border-neutral-200 bg-white p-6 text-sm text-neutral-700 space-y-3">
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                Tätigkeit hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
                allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
                erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
                Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
                entfernen.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">Haftung für Links</h2>
            <div className="rounded-xl border border-neutral-200 bg-white p-6 text-sm text-neutral-700 space-y-3">
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
                übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
                Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
                Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
                Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
              <p>
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
                Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">Urheberrecht</h2>
            <div className="rounded-xl border border-neutral-200 bg-white p-6 text-sm text-neutral-700 space-y-3">
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
                nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p>
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
                Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
                gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
                werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
