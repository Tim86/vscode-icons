import { ILangResource } from '../../models/i18n';

export const langDe: ILangResource = {
  newVersionMessage: 'Willkommen zur neuen Version von vscode-icons!',
  seeReleaseNotes: 'Was wurde geändert? (Englisch)',
  dontShowThis: 'Diese Nachricht beim nächsten Update nicht mehr anzeigen',
  seeReadme: 'Etwas über die Erweiterung lernen (Englisch)',
  welcomeMessageBegin: 'vscode-icons benutzt nun die offizielle API. Aktiviere die Icons unter ',
  welcomeMessageEnd: 'und wähle VSCode Icons aus.',
  activationPath: {
    darwin: 'Code > Einstellungen > Datei-Symboldesign ',
    linux: 'Datei > Einstellungen > Datei-Symboldesign ',
    win32: 'Datei > Einstellungen > Datei-Symboldesign ',
  },
  aboutOfficialApi: 'Mehr über Datei und Ordner Icons herausfinden (Englisch)',
  learnMore: 'Mehr herausfinden!',
  urlReleaseNote: 'https://github.com/robertohuertasm/vscode-icons/blob/master/CHANGELOG.md',
  urlReadme: 'https://github.com/robertohuertasm/vscode-icons/blob/master/README.md',
  urlOfficialApi: 'http://code.visualstudio.com/docs/customization/themes#_select-an-icon-theme',
  reload: 'Neu starten',
  autoReload: 'Automatisch neu starten',
  disableDetect: 'Projekterkennung deaktivieren',
  iconCustomizationMessage: 'Das Icon-Manifest wird nun neu generiert...',
  iconRestoreMessage: 'Das Icon-Manifest wird wieder zurückgesetzt.',
  ngPresetMessage: 'Angular Icons wird ',
  jsOfficialPresetMessage: 'Offizielles JS Icon wird',
  tsOfficialPresetMessage: 'Offizielles TS Icon wird',
  jsonOfficialPresetMessage: 'Offizielles JSON Icon wird',
  hideFoldersPresetMessage: 'Ordner Icons werden',
  enabled: 'aktiviert',
  disabled: 'deaktiviert',
  restart: 'Drücke \'Neu starten\' um die Änderungen zu übernehmen',
  ngDetected: 'vscode-icons hat ein Angular Projekt erkannt! ' +
  'Drücke \'Neu starten\', damit die Angular Icons übernommen werden.',
  nonNgDetected: 'vscode-icons hat ein nicht Angular Projekt erkannt! ' +
  'Drücke \'Neu starten\', damit die Angular Icons deaktiviert werden.',
  projectDetecticonResetMessage: 'Projekterkennung wird zurückgesetzt.',
};
