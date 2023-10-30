function dijkstra(graph, sourceNode) {
    dist = new Array(graph.length);
    for(i = 0; i < dist.length; i++) {
        dist[i] = new Array([Infinity]);  // Initializes Dist array so all the values are Arrays of the single number Infinity.
    }
    dist[sourceNode][0] = 0;

    for(unmarkedVertices = dist.length; unmarkedVertices > 0; unmarkedVertices--) {
        minIndex = 0;
        for(b = 0, min = Infinity; b < dist.length; b++){
            if(Array.isArray(dist[b]) && dist[b][0] < min) {
                min = dist[b][0];
                minIndex = b;
            }
        }
        dist[minIndex] = dist[minIndex][0]

        for(d = 0; d < graph[minIndex].length; d++) {
            if(dist[minIndex] + graph[minIndex][d][1] < dist[graph[minIndex][d][0]][0])
                dist[graph[minIndex][d][0]][0] = dist[minIndex] + graph[minIndex][d][1];
        }
    }
    return dist;
}
