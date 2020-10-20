---
layout: home
title: Einführung
permalink: /introduction/
---

# Functionality and features

## Core functionality

- Input of multiple, freely definable survey data/coordinates with attribute codes.
- Creation of geometric objects in the form of points, lines and polygons.
- Freely definable fields for attribute data.
- Output of survey data as topologically correct geometries in standard GIS data formats.
- Detailed validation and logging of data and processes, including topological cleaning.

<img class="intro__image" src="/assets/intro-images/logfile.jpg">

## Additional features:

- Open source software, published under GNU GPL 3.0.
- Portable software: no installation required.
- Runs on Windows XP/Vista/7/8 (32 and 64 Bit), Linux (32 and 64 Bit), Mac OS (planned).
- Can be controled trough a graphical user interface or via the command line.
- Input/output of 2D or 3D survey data.    

# Anwendung

Als Eingabedaten erwartet survey2gis eine oder mehrere Textdateien. Die Eingabedaten können aus eingemessenen Punkten (bzw. Koordinaten) und beschreibenden Sachdaten bestehen. In jedem Fall muss aber eine Punktmessung pro Zeile vorliegen, d. h. jede Zeile der Eingabedatei muss mindestens genau eine X- und eine Y-Koordinate enthalten.

<img class="intro__image" src="/assets/intro-images/select-file.jpg">
<img class="intro__image" src="/assets/intro-images/additional-options.jpg">

Die Software kann sowohl von der Kommandozeile als auch per graphischer Benutzeroberfläche (GUI) gesteuert werden.
Um die Software von der Kommandozeile aus zu benutzen, muss unter Windows zunächst cmd.exe gestartet werden und anschließend ins
entsprechende Verzeichnis auf dem Installationslaufwerk gewechselt werden.

**Ein minimaler Programmaufruf von survey2gis zum Zwecke der Datenprozessierung umfasst demnach:**

- Die Angabe einer Datei mit Parserschema
- den Pfadnamen eines existierenden Verzeichnisses, in welchem die Ausgabedatei/en gespeichert werden sollen,
- einen Basisnamen für die Benennung der Ausgabedatei(en)
- und eine oder mehrere Eingabedateien.

Das Parserschema ist eine einfache Textdatei in ASCII-Kodierung, deren Aufbau in Abschnitt detailliert beschrieben ist.
Ihre Aufgabe ist es, den Inhalt der Eingabedatei(en) und die Form der Ausgabedaten detailliert zu beschreiben.
Das Format „ESRI Shapefile” ist das Standardformat für die Datenausgabe durch survey2gis.
Es ist zwar kein von einem unabhängigen Gremium zertifizierter Standard, hat aber die Bedeutung eines Quasi-Standards in der GIS-Welt.


# Ausgabeformate

Um die weitere Verarbeitung mit unterschiedlichen Anwendungen zu ermöglichen, wird survey2gis eine Reihe von Ausgabeformaten unterstützen (bislang ist lediglich das Ausgabeformat „ESRI Shapefile” implementiert):

<img class="intro__image" src="/assets/intro-images/select-output.jpg">

# Spracheinstellung

Bei survey2gis handelt es sich um eine internationalisierte Software, deren Meldungen sich vollständig in unterschiedliche Sprachen übersetzen lassen.
Bei Programmstart prüft survey2gis die aktuellen Spracheinstellungen des Betriebssystems und zeigt entsprechend übersetzte Bildschirmtexte an.
Existiert keine passende Übersetzung, so wird auf Englisch zurückgeschaltet.

Zur Internationalisierung gehören auch unterschiedliche Notationen für Dezimalzahlen. So kann die Zahl „Zehntausendkommanull” im deutschen und niederländischen Sprachraum folgendermaßen notiert werden:10.000,00 Im englischen Sprachraum jedoch so: 10,000.00

Ebenso wie die Programmtexte, werden die Zeichen zur Repräsentation von Dezimalpunkt und Tausendertrennzeichen automatisch nach den Vorgaben des Betriebssystem gesetzt, unter welchem survey2gis läuft. Da Eingabedaten und verarbeitende Software aber oftmals unterschiedliche, individuelle Spracheinstellungen besitzen, bietet survey2gis zudem die Möglichkeit, beide Zeichen Dezimalpunkt und Tausendertrenner explizit anzugeben. Alternativ kann survey2gis gezwungen werden, stets englische Meldungen und Zahlennotationen zu verwenden.


# Topologische Bereinigung

Die GIS-gestützte Verarbeitung von räumlichen Daten stellt besondere Anforderungen an deren Qualität. Hierzu gehört die topologische Qualität der Daten. Darunter sind geometrische Beziehungen zwischen Objekten wie Polygonen zu verstehen, welche im Rahmen des GIS-Datenmodells zu gewährleisten sind.

In survey2gis laufen einige Funktionen nach dem Datenimport automatisch ab, die gewährleisten sollen, dass die topologische Qualität der Daten erhöht wird. Hierbei ist einschränkend zu bachten, dass das GIS-Topologiemodell ein zweidimensionales ist.
Ebenso sind die meisten Topologiefunktionen von survey2gis nur in 2D implementiert. Diese bedeutet, dass die Daten so betrachtet werden, als würde Z konstant „0” betragen. Je nachdem, wieviel Varianz die Z-Daten enthalten, kann dies zu mehr oder weniger signifikanten Abweichungen von der Realität führen. Die topologische Bereinigung funktioniert besser, je planarer die Daten sind.

Obwohl einige GIS eigene, teils sehr leistungsfähige, Werkzeuge zur topologischen Bereinigung zur Verfügung stellen, sollte die grundsätzliche Arbeit besser von survey2gis verrichtet werden, da ihm die vollen Eingabedaten zur Verfügung stehen, während das GIS nur auf die bereits rekonstruierten Geometrien zurückgreifen kann.

<img class="intro__image" src="/assets/intro-images/options-after-execution.jpg">
<img class="intro__image" src="/assets/intro-images/advanced-settings.jpg">