if [[ -z $1 ]];
then 
    echo -n "No arguments supplied"
else
i=1
while [ -n "$1" ]; do
	mkdir ex$1
	shift
    
done
fi