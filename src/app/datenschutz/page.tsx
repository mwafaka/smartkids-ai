import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung gemäß DSGVO — SmartKids AI",
};

export default function DatenschutzPage() {
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

        <h1 className="text-3xl font-bold text-neutral-900 mb-8">Datenschutzerklärung</h1>

        <div className="prose prose-neutral max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">1. Datenschutz auf einen Blick</h2>
            <div className="rounded-xl border border-neutral-200 bg-white p-6 text-sm text-neutral-700 space-y-3">
              <h3 className="font-semibold text-neutral-900">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
                Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden
                können.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">2. Verantwortliche Stelle</h2>
            <div className="rounded-xl border border-neutral-200 bg-white p-6 text-sm text-neutral-700 space-y-2">
              <p>SmartKids AI</p>
              <p>Musterstraße 1</p>
              <p>10115 Berlin</p>
              <p>Deutschland</p>
              <p>E-Mail: datenschutz@smartkids-ai.com</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">3. Datenerfassung auf dieser Website</h2>
            <div className="rounded-xl border border-neutral-200 bg-white p-6 text-sm text-neutral-700 space-y-3">
              <h3 className="font-semibold text-neutral-900">Server-Log-Dateien</h3>
              <p>
                Der Provider dieser Seiten erhebt und speichert automatisch Informationen in so-called
                Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des
                zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse.
              </p>
              <p>
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
              </p>
              <p>
                Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
                Websitebetreiber hat ein berechtigtes Interesse an der fehlerfreien Darstellung und
                Optimierung seiner Website.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">4. Lokale Datenspeicherung</h2>
            <div className="rounded-xl border border-neutral-200 bg-white p-6 text-sm text-neutral-700 space-y-3">
              <h3 className="font-semibold text-neutral-900">localStorage</h3>
              <p>
                Diese Website speichert Daten lokal im Browser des Nutzers (localStorage).
                Hierbei handelt es sich um:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Kinderprofile (Name, Geburtsdatum, Interessen)</li>
                <li>Aktivitätsverlauf und Bewertungen</li>
                <li>Favoriten und Chatverlauf</li>
                <li>Ausgewähltes Kind</li>
              </ul>
              <p>
                Diese Daten werden <strong>nicht</strong> an Server übertragen und verbleiben ausschließlich
                auf Ihrem Gerät. Sie können diese Daten jederzeit durch Löschen der Browserdaten
                entfernen.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">5. KI-Funktionen</h2>
            <div className="rounded-xl border border-neutral-200 bg-white p-6 text-sm text-neutral-700 space-y-3">
              <p>
                Diese Anwendung nutzt die OpenAI API zur Generierung personalisierter
                Aktivitätsempfehlungen. Dabei werden ausschließlich die vom Nutzer eingegebenen
                Informationen (Kindesalter, Interessen) an OpenAI übermittelt.
              </p>
              <p>
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
                Die Daten werden nur zur Erstellung der Empfehlungen verwendet und nicht dauerhaft
                gespeichert.
              </p>
              <p>
                Anbieter: OpenAI, L.P., 3180 18th St, San Francisco, CA 94110, USA.
                Datenschutzerklärung: <a href="https://openai.com/privacy" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">https://openai.com/privacy</a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">6. Ihre Rechte</h2>
            <div className="rounded-xl border border-neutral-200 bg-white p-6 text-sm text-neutral-700 space-y-3">
              <p>Sie haben jederzeit das Recht auf:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Auskunft</strong> über Ihre gespeicherten personenbezogenen Daten (Art. 15 DSGVO)</li>
                <li><strong>Berichtigung</strong> unrichtiger Daten (Art. 16 DSGVO)</li>
                <li><strong>Löschung</strong> Ihrer Daten (Art. 17 DSGVO)</li>
                <li><strong>Einschränkung</strong> der Verarbeitung (Art. 18 DSGVO)</li>
                <li><strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
                <li><strong>Widerspruch</strong> gegen die Verarbeitung (Art. 21 DSGVO)</li>
              </ul>
              <p>
                Da wir keine personenbezogenen Daten auf Servern speichern, können Sie Ihre Rechte
                direkt durch Löschen der lokalen Daten in Ihrem Browser ausüben.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-3">7. Beschwerderecht</h2>
            <div className="rounded-xl border border-neutral-200 bg-white p-6 text-sm text-neutral-700 space-y-3">
              <p>
                Sie haben das Recht, sich bei einer Aufsichtsbehörde über die Verarbeitung Ihrer
                personenbezogenen Daten zu beschweren. Zuständige Aufsichtsbehörde:
              </p>
              <p>
                Berliner Beauftragte für Datenschutz und Informationsfreiheit<br />
                Friedrichstr. 219<br />
                10969 Berlin<br />
                Telefon: +49 30 13889-0<br />
                E-Mail: mailbox@datenschutz-berlin.de
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
