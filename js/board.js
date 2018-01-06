$(document).ready(function () {
    var board = new Board(19, [4, 10, 16], $('#grid'));
    board.paint();

    $(".grid-item").droppable({
        accept: ".stone",
        greedy: true,
        drop: function (event, ui) {
            var $this = $(this);

            if ($this.children().length === 0) {
                ui.draggable.css("position", "static");
                $this.append(ui.draggable);
            }
        }
    });
});

function Board(size, stars_array, $grid_obj) {

    var N = size;
    var stars = stars_array;
    var $grid = $grid_obj;

    this.paint = function () {
        for (y = 1; y <= N; y++) {
            for (x = 1; x <= N; x++) {
                var cell = $("<div style='grid-row: " + y + "; grid-column: " + x + ";'></div>")
                    .addClass("unselectable grid-item");
                if (y === 1 && x === 1) {
                    cell.addClass("grid-top-left");
                } else if (y === 1 && x === N) {
                    cell.addClass("grid-top-right");
                } else if (y === N && x === 1) {
                    cell.addClass("grid-bottom-left");
                } else if (y === N && x === N) {
                    cell.addClass("grid-bottom-right");
                } else if (y === 1) {
                    cell.addClass("grid-top");
                } else if (y === N) {
                    cell.addClass("grid-bottom");
                } else if (x === 1) {
                    cell.addClass("grid-left");
                } else if (x === N) {
                    cell.addClass("grid-right");
                } else if (stars.includes(x) && stars.includes(y)) {
                    cell.addClass("grid-cross-dot");
                } else {
                    cell.addClass("grid-cross");
                }
                $grid.append(cell);
            }
        }
    }
}