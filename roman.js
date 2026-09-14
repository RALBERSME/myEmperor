setTimeout(() => {
  document.getElementById("title").textContent = "Gerichtssaal";
}, 3100);
setTimeout(() => {
  document.getElementById("hammer").style.display = "none";
}, 3600);
setTimeout(() => {
  document.querySelector(".container2").style.visibility = "visible";
}, 3900);
let utterance = null;

function starteVorlesen() {
  window.speechSynthesis.cancel();

  const text =
    "Kapitel eins, Das letzte Protokoll im Exil der Ewigkeit. Das Sterben Wilhelm des zweiten im Exil war eine geräuschlose Angelegenheit gewesen, eine Sache von vergilbter Seide, dem fahlen Geruch von Kampfer und dem fernen, dumpfen Grollen der Wehrmachtsmotoren, die am 4. Juni 1941 durch die Alleen von Doorn vibrierten. Draußen, hinter den hohen Fenstern des Schlosses, fraß sich der Juni mit einer fast unverschämten Pracht durch den Park. Die Rhododendren standen in schwerer, violetter Blüte, und der niederländische Sommer roch nach feuchter Erde und gemähtem Gras. Doch hier drinnen, im Schlafzimmer des Hauses Doorn, schien die Zeit zu kochen. Sie war zähflüssig geworden, dick und gelb wie der Kamillentee, den man ihm seit Tagen vergeblich einzuflößen versuchte. Es roch nach Alter. Nach dem unbarmherzigen Verfall von Fleisch, das einst in schwere, goldgestickte Uniformen gepresst worden war, und nach den scharfen, ätherischen Ölen, mit denen die Diener die stickige Luft zu reinigen suchten. Wilhelm lag auf dem Rücken. Die Kissen drohten ihn zu erdrücken, hielten ihn aber gleichzeitig in einer aufrechten Position, die fast wie ein Thronen wirkte, ein letztes, klägliches Theater des Körpers. Seine Finger der rechten Hand, der gesunden, starken Hand, waren tief in das weiße Laken gekrallt. Die Knöchel traten weiß und spitz hervor, als wollte er sich am Stoff der Welt festhalten, die ihm Sekunde um Sekunde entglitt. Die linke Hand dagegen, jene lebenslange, verkümmerte Schande, die er auf jedem Foto hinter Spazierstöcken, Handschuhen oder dem Griff seines Degens verborgen hatte, ruhte wie ein totes Vögelchen auf seiner Brust. Sie war klein, schwach, kalt. Ein nutzloses Stück Fleisch, das von Geburt an wie ein Fluch auf seinem Leben gelegen hatte. Seine Mutter Victoria hatte diesen Arm gehasst. Sie hatte ihn, den Erstgeborenen, wegen dieser Behinderung verachtet. Nun, am Ende von zweiundachtzig Jahren, lag dieser Arm schwer auf seinem Brustkorb, als drückte er die letzte Luft aus seinen Lungen. Seit Mitte Mai wütete das Darmleiden in ihm. Es war ein schleichender, entwürdigender Prozess gewesen. Ein Kaiser, dachte er in den lichten Momenten, die ihm das Fieber ließ, durfte an vielem sterben. Auf dem Schlachtfeld. Durch die Kugel eines Anarchisten. Aber nicht an den eigenen Eingeweiden. Das war bürgerlich. Das war gemein. Es passte nicht zu dem Mann, der sich einst als Allerhöchsten betiteln ließ, der mit seinen Prunkuniformen das Auge der Welt gefesselt hatte. Trotz der Schmerzen, trotz des Fiebers, das ihn seit Tagen in Halluzinationen stürzte, hatte er bis zum letzten Moment geglaubt. Er hatte daran geglaubt, wieder auf den deutschen Kaiserthron zurückzukehren. Es war kein bloßes Hoffen gewesen; es war eine absolute Gewissheit, die Nahrung aus seinem tiefen, unerschütterlichen Glauben an das Gottesgnadentum zog. Gott konnte Preußen nicht dauerhaft den Sozialisten, den Republikanern und nun diesen vulgären Emporkömmlingen der Nationalsozialisten überlassen. Er, Wilhelm, war der gesalbte Herrscher. Die Verbannung nach Doorn im November 1918 war in seinen Augen nur eine Prüfung gewesen. Ein schmerzhaftes Intermezzo. Wie ein Ertrinkender hatte er sich im vergangenen Jahr an jeden Strohhalm geklammert. Als die Wehrmacht am 14. Juni 1940 im Westfeldzug in Paris einmarschiert war, war in ihm der alte, imperiale Traum noch einmal richtig aufgeflammt. Er erinnerte sich an den Moment, als die Nachricht ihn erreichte. Er hatte auf der Terrasse von Doorn gesessen, die Beine in eine Decke gehüllt, als der Adjutant ihm das Telegramm brachte. Paris war gefallen! Das, was er 1914 mit seinen Armeen nicht geschafft hatte, was im Schlamm der Marne und im Blut von Verdun versunken war, diese neuen Truppen hatten es in wenigen Wochen vollbracht. In diesem Moment war die Verachtung, die er sonst für die Nazis empfand, für Stunden einer berauschenden Euphorie gewichen. Er hatte ein ergebenes Glückwunsch-Telegramm an Adolf Hitler aufgesetzt. „Unter dem tiefen Eindruck der Waffenstreckung Frankreichs beglückwünsche ich Sie und die gesamte deutsche Wehrmacht zu dem von Gott geschenkten gewaltigen Sieg“, hatte er diktiert, die Stimme zitternd vor Erregung. In seinem Kopf war die Welt plötzlich wieder geordnet gewesen. Die deutsche Armee siegte an allen Fronten. Er hatte geglaubt, dass Hitler, dieser Gefreite aus Österreich, nun die historische Pflicht erfüllen würde: den Thron freizumachen für den wahren Herrscher. Er hatte gehofft, Hitler würde im Rausch des Sieges einsehen, dass ein Großdeutsches Reich eine Krone brauchte. Seine Krone. Doch die Antwort aus Berlin war eiskalt geblieben. Keine Einladung zur Rückkehr. Keine Ehrenbezeugungen. Stattdessen hatte man ihn hier im besetzten Holland noch strenger bewachen lassen. Die Geheime Feldpolizei kontrollierte jeden, der das Anwesen betrat. Er war ein Relikt. Ein Ausstellungsstück einer vergangenen Epoche, das man duldete, solange es schwieg. Und nun war es der Juni 1941. Am ersten Tag dieses Monats hatten die Nachrichten die Einnahme Kretas vermeldet. Ein grandioser Sieg der Luftlandetruppen, hieß es im Radio. Doch Wilhelm hatte kaum noch zugehört. Zu diesem Zeitpunkt war er bereits von dem schweren Darmleiden so geschwächt, dass die Welt da draußen zu einem fernen Rauschen verblasste. Seine Gedanken wanderten zurück in die Vergangenheit. Er hatte zum Glück seine Memoiren bereits Jahre zuvor geschrieben, die Ereignisse und Gestalten sowie die 'Aus meinem Leben'. Er hatte sie sorgfältig formuliert, jedes Wort abgewogen, um der Nachwelt zu beweisen, dass er unschuldig war. Er hatte nichts zu bereuen. Er hatte sich nichts vorzuwerfen. Die anderen waren schuld gewesen: Edward VII. mit seiner Einkreisungspolitik, die unfähigen Diplomaten, der Verrat der Heimat im Jahr 1918. Er selbst hatte nur das Beste für sein Volk gewollt. Er hatte das Reich groß, reich und mächtig gemacht. Warum verstand das niemand? In der Nacht auf den 4. Juni änderte sich die Atmosphäre im Zimmer schlagartig. Das Atmen des Kaisers wurde flacher, rasselnder. Eine Lungenembolie hatte sich festgesetzt, ein gieriges Blutgerinnsel, das die Lungenstrombahn abschnürte. Das Fieber stieg, und mit ihm schwand das Bewusstsein. Er glitt ab in ein Zwischenreich aus Schatten und Licht. Am späten Vormittag, es mochte zwischen 11:30 Uhr und 12:30 Uhr sein, versammelte sich die Familie um das Bett. Seine zweite Frau, Hermine, stand starr an der Seite. Ihr Gesicht war eine Maske aus mühsam beherrschter Trauer und tiefer Enttäuschung. Sie, die ehrgeizige Reuß-Prinzessin, hatte bis zuletzt Briefe geschrieben, Allianzen gesucht und gehofft. Sie hatte alles schon für die Rückkehr auf den Kaiserthron vorbereiten wollen. Sie hatte sich bereits als Kaiserin im Berliner Stadtschloss gesehen, umgeben von glänzenden Uniformen und dem Hofstaat. Nun sah sie nur noch einen sterbenden, alten Mann, dessen Atemzüge immer unregelmäßiger wurden. Wilhelm spürte die Gegenwart der Menschen im Raum nicht mehr. In seinem sterbenden Gehirn lief ein ganz anderer Film ab. Er war bereit. Er hatte sein Leben gelebt, er hatte seine Pflicht getan. Jetzt wartete er auf den Einlass durch die goldene Himmelspforte. Es musste so sein. Für einen Hohenzollern, für den obersten Summus Episcopus der preußischen Kirche, stand der Himmel offen. Er wartete. Nicht auf den Tod, der Tod war ein bürgerliches Konzept für Leute, die Steuern zahlten und in den Schützengräben von Verdun im Schlamm erstickten. Er hatte auf das Protokoll gewartet. Auf den großen Einmarsch. Auf die Fanfaren der Garde du Corps, die dem letzten Herrscher von Gottes Gnaden den Weg in die Ewigkeit freiblasen mussten. Er sah sie vor sich: die goldene Pforte, strahlend im Licht Gottes, bereit, sich vor dem Kaiser des Deutschen Reiches zu öffnen. Doch das Licht flackerte. Die goldene Pforte";
  utterance = new SpeechSynthesisUtterance(text);
  const voices = window.speechSynthesis.getVoices();

  const maleVoiceNames = [
    "Microsoft Stefan",
    "Microsoft Christoph",
    "Google deutsch",
    "Yannick",
    "Markus",
  ];

  let selectedVoice = voices.find(
    (voice) =>
      voice.lang.startsWith("de") &&
      maleVoiceNames.some((name) => voice.name.includes(name)),
  );

  if (!selectedVoice) {
    selectedVoice = voices.find((voice) => voice.lang.startsWith("de"));
  }

  if (selectedVoice) {
    utterance.voice = selectedVoice;
  }

  utterance.pitch = 0.75;
  utterance.rate = 0.88;

  window.speechSynthesis.speak(utterance);
}

function stoppeVorlesen() {
  window.speechSynthesis.cancel();
}

if (window.speechSynthesis.onvoiceschanged !== undefined) {
  window.speechSynthesis.onvoiceschanged = () =>
    window.speechSynthesis.getVoices();
}
