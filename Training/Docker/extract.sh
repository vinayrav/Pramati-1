#!/bin/sh
fpath=$1 #command line input
echo "File path is =$fpath"
base2=$(basename "$fpath") #get the file name
base="resume.txt"


dire=$(dirname "$fpath") #get the file directory

cd .. #change directory to initial
cd $dire #change directory to file's directory
#fpath="Downloads//example.txt"
grep -E -o "\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}\b" testingthemail

grep '\(([0-9]\{3\})\|[0-9]\{3\}\)[ -]\?[0-9]\{3\}[ -]\?[0-9]\{4\}' testingthemail

grep -o '201[0-8]\{1\}' testingthemail


