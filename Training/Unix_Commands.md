## UNIX
```
The Unix operating system is a set of programs that act as a link between the computer and the user. Users communicate with the kernel through a program known as the shell. The shell is a command line interpreter; it translates commands entered by the user and converts them into a language that is understood by the kernel. Several people can use a Unix computer at the same time; hence Unix is called a multiuser system. A user can also run multiple programs at the same time; hence Unix is a multitasking environment.
```
- In Unix, there are three basic types of files
  - Ordinary Files − An ordinary file is a file on the system that contains data, text, or program instructions.
  - Directories − Directories store both special and ordinary files. For users familiar with Windows or Mac OS, Unix directories are equivalent to folders.
  - Special Files − Some special files provide access to hardware such as hard drives, CD-ROM drives, modems, and Ethernet adapters. Other special files are similar to aliases or shortcuts and enable you to access a single file using different names.

- Standard Unix Streams
  - stdin -file descriptor 0
  - stdout -file descriptor 1
  - stderr -file descriptor 2 
- **Commands:**
  - Calender- "cal"

  - Change password- "\$passwd"

  - Listing directories and files-
    1. "ls or ls -l"(with date created, rwxr-xr--(rwx-owner,-xr(group
        file),r--(other users)),starting with d are directories)
    2. Metacharacters -'*,?' -"\$ls *.txt | \$ls *.md | \$ls ch*.md"
    3. To list hidden files(sh,ksh,csh) -"\$ls -a"
  - Who am I- "whoami"

  - Others logged into same computer- "\$who | \$users | \$w"

  - Logout- "logout"

  - System shutdown-

    1. "halt" -Brings the system down immediately
    2. "init 0" -Powers off the system using predefined scripts t0 synchronize and clean up the system prior to shutting down
    3. "init 6" -Reboots the system by shutting it down completely and then restarting it
    4. "poweroff" -Shuts down the system by powering off
    5. "reboot" -Reboots the system
    6. "shutdown" -Shuts down the system
  - Creating files-
    1. "vi filename" -created file
    2. "i" -to enter into edit mode
    3. "esc"key -to escape from edit mode
    4. "shift+zz" -to entirely come out of file
  - Moving inside files-(out of esc)
    1. "l" key -to move to the right side.
    2. "h" key -to move to the left side.
    3. "k" key to move upside in the file.
    4. "j" key to move downside in the file
  - Display the content-
    1. cat filename
    2. cat -b filename -listed content with numbers
  - Counting words in a file-
    1. "\$wc filename" -display lines,words and characters in file
    2. "\$wc file1 file2" -multiple files
  - Copying files-
    1.  "\$cp source\_file destinatn\_file"
    2.  "\$cp" filename copyfile -already existing file with same name
  - Rename file-
    1. "\$mv old\_name new\_name"
  - Deleting files-
    1.  "$rm filename" | "$rm -i filename"
    2.  "\$rm file1 file2"
  - Home Directory-
    1.  "\$cd \~" -return to home directory
    2.  "\$cd \~username" -to other user
    3.  "\$cd -" -to last directory
  - "\$pwd" -Current working directory
  - "\$ls dir\_name" -listing files inside directory
  - Creating and deleting directories-
    1.  "\$mkdir dir\_name"
    2.  "\$mkdir dir1 dir2"
    3.  "\$mkdir /temp/dir\_name"
    4.  "\$mkdir -p /temp/dir\_name" -if temp not existing and create it
    5.  "$rmdir dir_name" | "$rmdir dir1 dir2" -deleting directories
  - Changing file or directory permissions-

    - chmod in symbolic mode
      1.  "\$chmod o+wx filename" -&gt; "+"-Adds the designated permission(s) to a file or directory.
      2.  "\$chmod u-r|w|x filename" -&gt; "-"-Removes the designated permission(s) from a file or directory.
      3.  "\$chmod g = rx filename" -&gt; Sets the designated permission(s).
      4.  \$chmod o+wx,u-x,g = rx testfile - in a single line ii.chmod in absolute permissions The second way to modify permissions with nthe chmod command is to use a number to specify each set of permissions for the file.


  - Changing Owners(chown) and Groups(chgrp)
    1.  "\$chown username testfile"
    2.  "\$chgrp group name testfile"
  - SUID and SGID file permission
    1.  "\$ chmod ug+s dirname"
  - Environment variables
    1.  "$TEST="Unix Programming" ,$echo \$TEST" - set a variable called TEST and assigned a value and acces using echo.These variables retain their values until we come out of the shell.\
  - Printing Files Text formatters to format text before printing(nroff
    and troff)
    1.  The pr Command - "\$pr option(s) filename(s)" - display only on
        screen, doesnot modify orginal file pr -k - Produces k columns
        of output

        
    2.  lp and lpr command - to print a file
        1.  "lp/lpr filename"
        2.  "lp -nNUM filename" - NUM no of copies
        3.  "lpr -NUM filename" - NUM no of copies
        4.  "lp -dprinter\_name filename / lpr -Pprinter\_name
            filename" - if there are more printers

    3.  "lpstat or lpstat -o" - displays printing requests in waiting
        queue also others
    4.  "lpq" - same as lpstat display printer status also
    5.  For cancelling printing requests
        1.  "cancel printer\_name/id" - for lp requests
        2.  "lprm id" - for lpr requests and display which file deleted

  - Sending an email

    1.  "mail \[-s subject\] \[-c cc-addr\] \[-b bcc-addr\] to-addr"
        eg:- mail -s "text it" smrithies@gmail.com
    2.  "mail -s "subject" "smrithies@gmail.com &lt; unix.txt" - sending
        an entire file(&lt; - redirect operator)
    3.  "mail" - to check incoming mail
  - Pipes and filters
    - Pipes
      - Pipes just connect two commands together by which two programs
        are connected together.
      - Output of one program become input for another.
      - Usually done by putting a vertical bar. &gt; Filters
      - Filters read data from standard input and write to
        standard output.
      - Standard input is the source of data for a program, and by
        default it is text typed in at the keyboard. However, it can be
        redirected to come from a file or from the output of
        another program.
      - Standard output is the destination of output from a program, and
        by default it is the display screen.

        1. Grep command

           - The grep filter searches a file for a particular pattern of
        characters, and displays all lines that contain that pattern.
           - The pattern that is searched in the file is referred to as the
        regular expression( word/characters).
           - grep stands for globally search for regular expression and
        print out.
           - "grep pattern file\_name"
           -   eg:- "ls -l | grep "pattern" file\_name"
    

       2. Sort command

          -   Sorts the lines in a file either alphabetically or numerically.
          -   "sort file\_name"
          -   -n Sorts numerically, ignores blanks and tabs.
          -   -r  Reverses the order of sort.
          -   -f Sorts upper and lowercase together.
          -   +x Ignores first x fields when sorting.

       3.  Pg and more command

          -   pg and more similar to view a file one page at a time
          -   eg:- "pg file\_name" - then type any key to navigate to next page
          -   More is a command to view(do not modify) the contents of a text
        file one screen at a time.
          -   eg:- "ls -l | grep "pattern" file\_name | sort | more
          -   It will stop showing text when screen filled with text and then
        to see further type any command
- Processes Management
  - When we try to run a command a new process is getting started
        which is tracked using a unique id- process id(pid).
  - pid repeats as all the numbers get used up but at a time no two
        process will have same pid.

    1. Starting a process

    -   Mainly two types of processes:- Foreground processes Background
        processes &gt; Foreground processes
    -   When executing a command it will be running in foreground.
    -   If a process is in foreground no other command can be entered,
        as prompt wont be available until process finished.
    -   eg:- "ls" &gt; Background processes
    -   When process is running in background its able to run another
        command and if its needed a ny output it will stop and it has to
        be bring to foreground.
    -   Command is made to run in background by adding an & at end
    -   eg:- "ls &"

    2.  Listing running processes
    -   "ps" | "ps -f"(full)
    -   -a Shows information about all users
    -   -x Shows information about processes without terminals
    -   -u Shows additional information like -f option
    -   -e Displays extended information

    3.  Killing processes
    -   "ctrl+c"- if foreground
    -   "kill pid" - pid from "ps" command
    -   "kill -9 pid" - if regular kill command not possible

    4.  Parent and child processes
    -   For every unix process both pid and ppid(parent pid) is assigned(usually shell).

    5.  Zombie and orphan processes
    -   Orphan - when parent process killed before child, sometimes
            init process becomes parent.
    -   Zombie/defunct - some process may have killed,finished
            execution, but still having an entry in process table.

    6.  Daemon processes
     -   Daemons are system-related background processes that often
            run with the permissions of root and services requests from
            other processes.
     -   A daemon has no controlling terminal.
     -   If a process is lengthy it is better to make it a daemon.

    7.  Top command
     -   The top command is used to quickly show the processes sorted
            by various criteria.
     -   It is an interactive diagnostic tool that updates frequently
            and shows information about physical and virtual memory, CPU
            usage, load averages, and your busy processes.
     -   "top"

    8.  Job id
     -   Different from pid and is shorter.
     -   A job can have multiple processes so jobid used instead of
            tracking individual processes.
- awk command
  - pattern scanning and processing language
