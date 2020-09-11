#/bin/bash

URL=$1
echo $(curl -s $URL)
