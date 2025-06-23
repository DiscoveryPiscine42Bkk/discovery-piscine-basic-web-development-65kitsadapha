if [[ -z $1 ]];
then 
    echo -n "No arguments supplied"
elif [[ -z $2 ]];	
then
	echo -n $1 
elif [[ -z $3 ]];
then 
	echo  $1 
	echo -n $2 
else
	echo "$1"
    echo "$2"
    echo -n "$3"
fi	
