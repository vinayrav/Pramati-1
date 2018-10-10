#Program to print the number of words with vowels in a resume

#!/bin/sh
pandoc resume.docx -o resume1.txt
filename="resume1.txt"
#Read word by word from a file
word=$(cat $filename)
count=0;
#Iterating through each words and checking whether it contains vowel.
for i in $word
do
	if [[ $i == *[AEIOUaeiou]* ]]
	then
		count=$((count+1));
	fi
done
echo "The number of words with vowels are $count"



#Output:- 

#The number of words with vowels are 386

