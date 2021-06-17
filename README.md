# The TestImpactGraph

Welcome to our prototype implementation of the TestImpactGraph.
It visualizes the methods which are tested by a developer test, as well as the instructions it additionally covers in comparison to the rest of the test suite.

At this moment, this tool requires a `.json` file similar to those in the [`src/data`](src/data) folder.
You can use the test-explorer functionality of the [TestCube IntelliJ plugin](https://github.com/TestShiftProject/test-cube/tree/test-explorer) to generate these.

## How to run the TestImpactGraph
Before you run the TestImpactGraph the first time, make sure you have npm installed (we tested on version `7.11.2`).
Then you will need to install all dependencies with
```
npm install
```

Then run the TestImpactGraph with
```
npm start
```
Then [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Inspecting the test cases from our think-aloud study
To replicate our think-aloud study, you only require this repository 🙂.

Start the tool as described above. Then you can find a drop-down menu at the top of the page.
There you can select which of the three example test cases you would like to inspect.
Please wait a bit after selecting a new one, as the layouting of a completely new graph takes quite a while 🙂.

## Generating and Inspecting an amplified test case from TestCube
Follow the [instructions at the corresponding release of TestCube](https://github.com/TestShiftProject/test-cube/blob/v1.0.3-tig.1/test-impact-graph.md) to generate an amplified test case and let TestCube create the `.json` file acting as the input for the TestImpactGraph.
Then, copy over the content of `test-cube/target/explorerJson.json` over to new file in this repository, best located in `scr/data`.
Modify (the first lines of) `src/App.tsx` to import your new json:
```
import yourData from './data/<your filename>.json';
```
Then, all the way at the end of `src/App.tsx`, add your new variable to the following calls:
```
    graph.data(yourData);
    graph.render();
    defaultView(graph, yourData);
```

Reload the webpage & inspect your developer test! 😊

## Built with:

The TestImpactGraph is built with the [G6 graph library from antv](https://g6.antv.vision/en).
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


