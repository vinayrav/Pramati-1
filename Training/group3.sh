#!/bin/sh
fpath=$1 #command line input
echo "File path is =$fpath"
base2=$(basename "$fpath")  #get the file name
base="resume.txt"

dire=$(dirname "$fpath")   #get the file directory

cd .. #change directory to initial
cd $dire #change directory to file's directory
#fpath="Downloads//example.txt"


pandoc -f markdown -t plain --wrap=none $base2 -o $base #converting md to txt

cou=$(cat $base) #cat command fetches the contents of the file
arr=( $cou ) #convert it to array

mi=${arr[0]}  
ma=${arr[0]}

#min and max calculation

for i in $cou
do
if (( ${#i}%2 == 0 ))
then
if [ ${#i} -lt ${#mi} ]
then
mi=$i
#echo $mi
elif [ ${#i} -gt ${#ma} ]
then
ma=$i
fi
fi
done
mincount=0
maxcount=0
for i in $cou
do 
if [ ${#i} -eq ${#mi} ]
then 
mincount=$((mincount + 1))
elif [ ${#i} -eq ${#ma} ]
then
maxcount=$((maxcount + 1))
fi
done


#printing the words and length
echo "Minimum length is = ${#mi}"
echo "Number of minimum even length words=$mincount"  
echo "Maximum length is = ${#ma}"
echo "Number of maximum even length words=$maxcount"  
 
