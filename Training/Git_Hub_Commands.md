# **GitHub commands :**

1. git –help : List out the git commands availale

2. git –help <command> : Provides help on the given command.

3.. git add path/filename     :  git add command adds the file or files to the staging state dosen’t 
                                               commit.
     git add –all/-A
     
     git add –update
    
     git add  file1 file2 file3

4. git branch -a : Lists all the branches .

5.git checkout parentpath/filename  : undo all changes made .
  
  git checkout master


6. git clone “link” - clones /downloads the repository in local repositroy.

7. git commit     :         Check-in (commit) local staged "working" files into local repository.
                                     Files must  be staged for commit using  git add Files are recursively 
                                     located and committed into the local git repository. 
   
    git  commit -m “message”
  
   git commit dir-path/filename


8.  git status : gives a current status of the staged files-whether commited or not.

9. git push origin master : pushes the commited files to the repository.

10. git pull [<options>] [<repository> [<refspec>…​]] -1st git pull calls git merge .It will fetch and replay the changes from the remote master branch since it diverged from the local master (i.e., E) until its current commit (C) on top of master and record the result in a new commit along with the names of the two parent commits and a log message from the user describing the changes.

11.git merge  --continue:     Incorporates changes from the named commits (since the 
                                             time their  histories diverged from the current branch) 
     git merge --abort             into the current  branch. 


