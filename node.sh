#!/bin/bash

version=$1
echo $(curl -sL https://deb.nodesource.com/setup_$version.x | sudo -E bash -
sudo apt-get install -y nodejs)
echo "node v-$version has installed"