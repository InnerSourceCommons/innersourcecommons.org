#!/bin/bash

# Get Params
operation=$1

# Show the help message
if [ "$operation" = "--help" ] || [ "$operation" = "-h" ] || [ "$operation" = "" ]; then
	cat <<-EOF

  Usage: i18n.sh [operation]
  Operations:

    --help/-h:	
      Show the help message.

    copy:
      Copy untranslated files from content/en to the content/<LANG> directories and 
      add them to content/.gitignore to prevent the files from being committed.

    clean:	
      Delete untranslated files listed in content/.gitignore.
      WARNING: For files that have been translated, REMOVE them from the series 
      of deletions by deleting their paths from the local content/.gitignore.

	EOF
  exit 0
fi

cat <<-EOF
To see how it works, run the help command: './i18n.sh --help'

Are you sure you want to proceed? (Yes/No)

EOF

read answer

if [ "$answer" = "Yes" ]; then
  if [ "$operation" = "copy" ]; then
    # Copy Operation
    if which gsed > /dev/null; then
      echo "hi"
      for i in de es fr it ja ru zh; do
        rsync -rv --ignore-existing content/en/ content/$i/ --log-file=content/.gitignore
        gsed -i '/total size\|file list/d' content/.gitignore
        gsed -i -E "s/^.+\s+(.+)$/$i\/\1/" content/.gitignore
      done
    else
      # Check the operating system
      if [ "$(uname)" == "Darwin" ]; then
        # If the operating system is macOS, stop execution and display a message
        echo "Please install gsed using 'brew install gnu-sed'"
        exit 1
      else
        rsync -rv --ignore-existing content/en/ content/$i/ --log-file=content/.gitignore
        sed -i '/total size\|file list/d' content/.gitignore
        sed -i -E "s/^.+\s+(.+)$/$i\/\1/" content/.gitignore
      fi
    fi

  elif [ "$operation" = "clean" ]; then
    if [ ! -f content/.gitignore ]; then
      echo "Error: content/.gitignore not found. You need to copy the files first."
      exit 1
    fi

	  cat <<-EOF

			After completing your edits, the untranslated and unnecessary files that you copied should 
			still be listed in the content/.gitignore file. The following this command will clean these 
			files from the content directory for each language.

			Again, are you sure to clean it? (Yes/No)
			
		EOF

    read double_check
    if [ "$double_check" = "Yes" ]; then
      # Delete Operation
      num_lines=$(wc -l < content/.gitignore)
      i=0
      for f in $(cat content/.gitignore); do
        i=$((i + 1))  # progress count
        printf "Progress: %3d%%\r" "$((i * 100 / num_lines))"
        rm "content/$f" # File deletion
      done
      echo
      rm content/.gitignore
    fi
  else
    echo "Invalid operation specified. Please specify either copy or clean as the parameter."
  fi
else
  echo "Script terminated."
fi


