[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12524536&assignment_repo_type=AssignmentRepo)
# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function. I have not provided any test code, but you can base
yours on test code from other exercises.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one!

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

## Runtime:

Where $|V|$ is the number of vertices and $|E|$ is the number of Edges:
Initialization of the dist list takes $|V|$-time and nothing is nested within it so it is just added to everything else. The next loop also iterates through all vertices so it is $|V|$-time as well and nested within it is a for-loop that goes through all of dist to find the smallest unmarked distance which takes $|V|$-time as well and finally from that node, all its connected edges are traversed and their nodes' distances are tested against what is currently found in dist. Because this only checks connected nodes and each edge will only be traversed once by the end of the algorithm, we can "Remove" the edge iterations from the loop nesting to give us: $\Theta(|V|+|E|+|V|^2)$


### Note:
I drew this graph to help me make sense of it so I went ahead and attached it.
