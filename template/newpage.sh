#!/bin/bash
if  [ ! -n "$1" ] ;then
    echo "输入页面名"
    exit 0
fi
shellpath=$(dirname $0)
path=${shellpath%/template}
compName=$1
CompName="$(tr '[:lower:]' '[:upper:]' <<< ${compName:0:1})${compName:1}"
cp $path/template/template.js $path/src/store/$compName.js
sed -i "" "s/template/$compName/g" $path/src/store/$compName.js
mkdir $path/src/page/$CompName
cp $path/template/template.jsx $path/src/page/$CompName/index.jsx
sed -i "" "s/template/$compName/g" $path/src/page/$CompName/index.jsx
sed -i "" "s/Template/$CompName/g" $path/src/page/$CompName/index.jsx
cp $path/template/template.less $path/src/page/$CompName/index.less
sed -i "" "s/template/$compName/g" $path/src/page/$CompName/index.less

