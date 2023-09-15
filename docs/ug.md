---
sidebar_position: 5
---

# Software User Guide

## Chip Creator Information Guide

### Introduction

Chip Creator is an intuitive Graphical User Interface (GUI) microchip floorplanning tool built
for the Linux Operating System (OS). This tool aids in simplifying the design phase of an
Integrated Circuit (IC) team, by intuitively creating custom chip layouts, running checks of the
created chip’s circuit geometry, and publishing the finalized chip’s Integrated Circuit Package
(ICP) for factory production.

Because of its designed logic, Chip Creator is markedly faster than previous generations of
floorplanning software. The software operates by using the number of cells in its design
architecture in a linear format, so performance is kept at a high priority in the OS, regardless
of circuit complexity or size.

Chip Creator is designed to layout circuitry for wire traces by default, but also has the
capability to adapt for polysilicon tracing as necessary. The software reads its built-in library
information and design parameters (clock speed, die size, schematics, etc.) to intelligently
place components on the chip’s die. Then, the software makes the necessary connections
between the components using the chosen medium previously mentioned.

### Prerequisites

For faster startup and ease of transition, the Chip Creator team recommends the following
actions be taken prior to software roll-out:

- License Acquisition:

  Chip Creator uses batch licensing. Once a license is registered, the software can be
  installed on as many computers as necessary for your IC Design team needs, without
  the hassle of individual license tracking.

  **Note:** It is recommended to keep the licensing and software up-to-date for the best
  performance.

- Network-Sharing:

  Chip Creator may be set up to read design information, compare preferences, and
  share files over a network. This feature allows team-members access to cross-team
  information.

  **Note:** It is recommended to start the appropriate network server prior to the installation of
  Chip Creator .

- Design Checking:

  Chip Creator outputs both log and report files which can be opened in any
  proprietary text reading or editing software (Notepad, Notepad++, etc.) to aid in
  checking for errors in the generated ICP files.

  **Note:** It is recommended to use a third-party software to cross-check the output chips design
  before submitting the created ICP for production purposes.

### Running Chip Creator

To start Chip Creator, proceed as follows:

1. Open the **Linux File Manager** and navigate to Chip Creator’s main folder structure.
2. _Right-click_ in a blank space inside the folder, and _Left-Click_ Open in **Terminal**.
3. Once the terminal window opens, type the following command and press Enter:

<code>$ setenv TOOL_HOME</code>

4. Run the Chip Creator build in the new environment:

<code>$ TOOL_HOME/bin/chip_creator_app</code>

**Note:** Once finished building, the terminal should now display <code>CC_PROMPT></code>.

5. Lastly, enter the following command to open the Chip Creator GUI.

<code>CC_PROMPT> start_gui</code>

### Menu Options

With the Chip Creator GUI open, you will see the following drop-down menu options in the
top toolbar:

- File>Open: Opens a navigation window to browse for compatible design files (.lef, .lib, or,
  .netlis).

- Verify: Runs Inputs, Design, or ALL verification check(s) of either the chip's functions or
  design.
  - Verify>Inputs: Checks the loaded design files integrity and runs a verification check
    that each required file is present before proceeding.
  - Verify>Design: Checks the chips layout for errors in component placement, missing
    components, etc.
  - Verify>ALL: Runs both Inputs and Design verification checks.
    Run>Create auto outline: Automatically creates X and Y-axis outline parameters (working
    size) for a chip design.

### Creating a New Chip Design

Chip Creator must first be loaded with a set of design files to model the chip from. These
files may be selected from the built-in library, or your team's own files. Chip Creator may
also be set up to open prior design files by left-clicking (Need Info for menu options.) in the
menu and left-clicking (?) to save the preference upon opening the program.

To create a new chip design, proceed as follows:

1. Navigate to **File>Open** and select the applicable _tech.lef_ file.

   **Note:** A tech.lef file must be opened first, or design verification failure is likely.

2. Repeat the previous step for the corresponding _cells.lef_, _timing.lib_ and _design.netlis_
   files.

3. Once the files are loaded into the GUI, navigate to **Verify** and select **Inputs Check** to run a verification check of the files, or design corruption may follow. There should be no warnings or errors present if all files are complete.

   **Note:** Info messages will display all files that were read. Chip Creator automatically generates a Verification Report that can be referred to in the _Logs_ folder.

Once the verification check is complete, Chip Creator will proceed to the Outline
Parameters section.

### Set Chip Outline Parameters

Chip Creator can set a microchip’s working outline parameters automatically or manually by
drawing with your mouse.

**Note:** _X_ and _Y-axis_ distances are measured in microns. The outline of the chip must
be large enough to fit all the information as determined in the _cells.lef_ file.

To set outline parameters automatically, proceed as follows:

1. From the main menu, navigae to **Run** and click **Create Auto Outline**. _Outline_ should now display
   on the screen.

To set outline parameters by manually drawing, proceed as follows:

1. From the GUI menu, navigate to **Edit** and click **Draw Outline**.

2. Once the draw outline screen opens, **left-click and hold** the mouse button to drag
   the chip outline to the desired size.

The next step is to place the applicable cells within the established chip border.

### Placing Cells in Chip Border

This can be done through the main menu as Chip Creator reads the loaded _Cells.lef_ file and
intelligently places the individual cells in an established position.

To place the cells, proceed as follows:

1. From the main menu, navigate to **Run** and click **Place All Cells**.

   **Note:** The cells should now be displayed on the screen placed within the border.

To manually adjust a cells position, proceed as follows:

1. Left-click the desired cell once. The cell will highlight.

2. Using the arrow keys on the keyboard, move the cell to the desired location.

Once the cells are placed in the chip border, the next step is to connect the wire (or
polysilicon) traces between the cells.

### Connecting Cell Traces

Chip Creator will connect the traces automatically as it reads the _tech.lef_ file for parameters such as wire size, length, connections, etc.

To connect the cell traces automatically, proceed as follows:

1. From the main menu, navigate to **Run** and select **Connect Traces**.

   **Note:** If the connect command will not complete, the cells placement is in conflict with
   the wiring connection traces. Rerun the **Placing Cells in Chip Border** steps.

### Chip Design Finalization

The chip is now in its final stages. All the traces should be connected, and the cells placed
according to the file parameters. The last step for Chip Creator will be to run a Verification
Check of the design from start to finish.

To run the final Verification Check, proceed as follows:

1. From the main menu, navigate to **Verify** and selct **All**.

Once complete, the Verification Log (Verify.txt) should show no errors or warnings.

**Note:** If errors or warnings are present, refer to the section each issue represents and rerun that section
through to completion.

Congratulations! Your chip is ready for production.
