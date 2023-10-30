function dijkstra(graph, sourceNode) {
    dist = new Array(graph.length);
    for(i = 0; i < dist.length; i++) {
        dist[i] = new Array(Infinity, -1);  // Initializes Dist array so all the first values are Infinity, to represent
                                            // the current shortest distance between this and the root node. Initializes
                                            // the second variable to -1 as a sentinel value representing an unmarked node.
    }
    dist[sourceNode][0] = 0;

    for(unmarkedVertices = dist.length; unmarkedVertices > 0; unmarkedVertices--) {
        minIndex = 0;
        for(b = 0, min = Infinity; b < dist.length; b++){
            if(dist[b][0] < min && dist[b][1] == -1) {
                min = dist[b][0];
                minIndex = b;
            }
        }
        dist[minIndex][1] = dist[minIndex][0]

        for(d = 0; d < graph[minIndex].length; d++) {
            if(dist[minIndex][0] + graph[minIndex][d][1] < dist[graph[minIndex][d][0]][0])
                dist[graph[minIndex][d][0]][0] = dist[minIndex][0] + graph[minIndex][d][1];
        }
    }
    return dist;
}
