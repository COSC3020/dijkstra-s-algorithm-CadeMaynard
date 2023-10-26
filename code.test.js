const fs = require('fs');
var test = require('unit.js');

eval(fs.readFileSync('code.js')+'');

        var dijkAdjList1 = [[[1,1],[2,8]],
                            [[0,6],[2,1]],
                            [[0,1],[3,4]],
                            [[0,5],[4,3],[5,2]],
                            [[1,3],[3,7]],
                            []];

        var Result1 = [[0,0],[1,1],[2,2],[6,6],[9,9],[8,8]];
        var Result2 = [[1,1],[2,2],[0,0],[4,4],[7,7],[6,6]];

        test.array(dijkstra(dijkAdjList1, 0)).is(Result1);
        test.array(dijkstra(dijkAdjList1, 2)).is(Result2);