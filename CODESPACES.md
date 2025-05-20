# Using GitHub Codespaces for Website Preview

This guide will help you use GitHub Codespaces to preview changes to the InnerSource Commons website without needing to set up a local development environment.

## What is GitHub Codespaces?

GitHub Codespaces is a cloud-based development environment that allows you to work on projects directly from your browser. It's perfect for contributors who don't want to set up a local development environment.

## Getting Started with Codespaces

### Step 1: Navigate to the Repository

Go to the [InnerSource Commons website repository](https://github.com/InnerSourceCommons/innersourcecommons.org) on GitHub.

### Step 2: Create a New Codespace

1. Click the green "Code" button near the top right of the repository page
2. Select the "Codespaces" tab
3. Click "Create codespace on master"

![Create a Codespace](https://github.com/user-attachments/assets/e6bf365c-a119-4609-bbae-20efcb8cba18)

### Step 3: Wait for the Codespace to Load

The Codespace will take a minute or two to set up. You'll see a loading screen while it prepares the environment.

### Step 4: Run the Hugo Server

Once the Codespace is loaded:

1. Click the "Run and Debug" icon in the left sidebar (it looks like a play button with a bug)
2. At the top of the Run and Debug panel, click on the dropdown and select "Hugo Server"
3. Click the green play button to start the Hugo server

### Step 5: View the Website Preview

When the Hugo server starts:

1. A notification will appear in the bottom right corner saying "Your application running on port 1313 is available"
2. Click "Open in Browser" to view the website in a new tab

### Step 6: Make and Preview Changes

1. Navigate to the `content` folder to find the files you want to edit
2. Make your changes to the files
3. Save your changes (Ctrl+S or Cmd+S)
4. The website preview will automatically update with your changes

## Working with Branches and Pull Requests

### Creating a New Branch

1. Click the branch name in the bottom left corner of the Codespace
2. Select "Create new branch..." from the dropdown menu
3. Enter a name for your branch and press Enter

### Committing Your Changes

1. Click the "Source Control" icon in the left sidebar (it looks like a branch)
2. Review your changes
3. Enter a commit message in the text box
4. Click the checkmark icon to commit your changes

### Creating a Pull Request

1. After committing your changes, click the "..." menu in the Source Control panel
2. Select "Push" to push your changes to GitHub
3. When prompted, click "Create Pull Request"
4. Fill out the pull request form and click "Create"

## Troubleshooting

If you encounter any issues:

- **Hugo server not starting**: Try restarting the Codespace by clicking on the menu in the bottom left corner and selecting "Codespaces: Stop Current Codespace" and then restarting it.
- **Changes not showing**: Make sure you've saved your files and that the Hugo server is running.
- **Port not forwarding**: Click the "Ports" tab at the bottom of the Codespace and make sure port 1313 is forwarded.
- **Container in recovery mode**: If you see a message about the container running in recovery mode, click the "Rebuild Container" button in the notification or run the "Codespaces: Rebuild Container" command from the command palette (F1).

## Getting Help

If you're stuck, you can:

1. Check the [Hugo documentation](https://gohugo.io/documentation/)
2. Ask for help in the InnerSource Commons community channels
3. Create an issue on the GitHub repository