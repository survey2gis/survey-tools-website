---
layout: home
title: Introduction
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

# Application

As input data survey2gis expects one or more text files. The input data can consist of measured points (or coordinates) and descriptive data. In any case, however, one point measurement per line must be present, i.e. each line of the input file must contain at least exactly one X and one Y coordinate.

<img class="intro__image" src="/assets/intro-images/select-file.jpg">
<img class="intro__image" src="/assets/intro-images/additional-options.jpg">

The software can be controlled both from the command line and via the graphical user interface (GUI).
To use the software from the command line, under Windows cmd.exe must first be started followed by
changing to the corresponding directory.

**A minimal program call of survey2gis for the purpose of data processing includes:**

- The specification of a file with a parsing schema
- the path name of an existing directory in which the output file / s are to be saved,
- a base name for naming the output file (s)
- and one or more input files..

The parsing scheme is a simple text file in ASCII encoding, whose structure is described in detail in section [...].
Its task is to describe the content of the input file(s) and the form of the output data in detail.
The format "ESRI Shapefile" is the standard format for data output by survey2gis.
Although it is not a standard certified by an independent committee, it has the significance of a standard in the GIS world.



# Output Formats

To enable further processing with different applications, survey2gis will support a number of output formats (so far only the output format "ESRI Shapefile" is implemented):

- ESRI Shapefile
- Drawing Exchange Format (DXF)
- MapInfo ASCII (MIF/MID)
- Scalable Vector Graphics (SVG)
- Visualization Toolkit (VTK)

<img class="intro__image" src="/assets/intro-images/select-output.jpg">

# Language setting

survey2gis is an internationalized software whose reports can be completely translated into different languages.
When the program is started, survey2gis checks the current language settings of the operating system and displays correspondingly translated screen texts.
If no suitable translation exists, the program switches back to English.

Internationalization also includes different notations for decimal numbers. For example, the number "Ten thousand point zero" can be notated as follows in the German and Dutch language areas: 10.000,00 In the English language area, however, it is as follows: 10,000.00

Just like the program texts, the characters representing the decimal point and thousands separator are automatically set according to the specifications of the operating system under which survey2gis runs. Since input data and processing software often possess different, individual language attitudes, survey2gis offers besides the possibility of indicating both characters decimal point and thousand separator, explicitly. Alternatively, survey2gis can be forced to always use English messages and numerical notation.


# Topological cleanup

The GIS-supported processing of spatial data places special demands on its quality. This includes the topological quality of the data. Further geometrical relations between objects such as polygons, which have to be guaranteed within the GIS data model.

In survey2gis some functions run automatically after the data import to ensure that the topological quality of the data is increased. A limiting factor here is that the GIS topology model is two-dimensional.
Also, most of the topology functions of survey2gis are only implemented in 2D. This means that the data is considered as if Z were a constant "0". Depending on how much variance the Z data contains, this can lead to more or less significant deviations from reality. Topological cleanup works better the more planar the data is.

Although some GIS provide their own, partly very powerful, tools for topological cleanup, the basic work should better be done by survey2gis, because it has the full input data at its disposal, while the GIS can only access the already reconstructed geometries.

<img class="intro__image" src="/assets/intro-images/options-after-execution.jpg">
<img class="intro__image" src="/assets/intro-images/advanced-settings.jpg">

# Known problems

The following problems are known in the current version of survey2gis:

1. Under Windows, due to the operating system itself, survey2gis cannot switch between command line and GUI mode as elegantly as under Linux and Mac OS X. Instead, two different versions of "survey2gis.exe" are required.