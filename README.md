# Node.js File System Operations

A Node.js application that monitors a command file and performs file system operations based on text commands. This project demonstrates file watching, asynchronous file operations, and command parsing in Node.js.

## Features

- **File Creation**: Create new files with custom paths
- **File Deletion**: Remove files from the filesystem
- **File Renaming**: Rename/move files to new locations
- **Content Addition**: Append content to existing files
- **Real-time Monitoring**: Watches command.txt for changes and executes commands automatically

## How It Works

The application monitors `command.txt` for changes and parses commands to perform file operations:

1. The app starts and opens `command.txt` for reading
2. A file watcher monitors the command file for changes
3. When the file changes, the app reads and parses the command
4. The corresponding file operation is executed

## Supported Commands

### Create a File
```
create a file <path/to/file.txt>
```
Creates a new file at the specified path. If the file already exists, it will not be overwritten.

### Delete a File
```
delete the file <path/to/file.txt>
```
Removes the specified file from the filesystem.

### Rename a File
```
rename the file <old/path.txt> to <new/path.txt>
```
Renames or moves a file from the old path to the new path.

### Add Content to a File
```
add to the file <path/to/file.txt> this content: <your content here>
```
Appends the specified content to the end of the file.

## Installation

1. Clone or download this project
2. Navigate to the project directory
3. No additional dependencies required - uses only built-in Node.js modules

## Usage

1. Start the application:
```bash
node app.js
```

2. Open `command.txt` in a text editor
3. Add one of the supported commands (see above)
4. Save the file - the command will be executed automatically
5. Check the console for operation results

## Example Workflow

1. Start the application: `node app.js`
2. Edit `command.txt` and add: `create a file test.txt`
3. Save the file - a new `test.txt` will be created
4. Edit `command.txt` again: `add to the file test.txt this content: Hello World!`
5. Save - "Hello World!" will be appended to test.txt
6. Edit `command.txt`: `rename the file test.txt to renamed.txt`
7. Save - the file will be renamed
8. Edit `command.txt`: `delete the file renamed.txt`
9. Save - the file will be deleted

## Error Handling

The application includes comprehensive error handling:
- File existence checks before creation
- Graceful handling of missing files during deletion/renaming
- Error logging for filesystem operations
- Duplicate content prevention in add operations

## Technical Details

- **Language**: JavaScript (Node.js)
- **Core Modules**: `fs/promises` for asynchronous file operations
- **Architecture**: Event-driven with file watching
- **Pattern**: Command pattern with text-based interface

## Learning Objectives

This project demonstrates:
- Asynchronous file system operations in Node.js
- File watching and event handling
- Command parsing and execution
- Error handling in file operations
- Buffer manipulation for file reading

## Notes

- The application runs continuously until manually stopped (Ctrl+C)
- Commands are processed in the order they appear in command.txt
- Only one command is processed per file change
- The command file is monitored in real-time
