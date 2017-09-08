function showGrid() {
	$('body').append(`
		<div id="forh-bs-grid">
			<div class="container">
				<div class="row">
					<div class="col-sm-1">
						<div>1</div>
					</div>
					<div class="col-sm-1">
						<div>2</div>
					</div>
					<div class="col-sm-1">
						<div>3</div>
					</div>
					<div class="col-sm-1">
						<div>4</div>
					</div>
					<div class="col-sm-1">
						<div>5</div>
					</div>
					<div class="col-sm-1">
						<div>6</div>
					</div>
					<div class="col-sm-1">
						<div>7</div>
					</div>
					<div class="col-sm-1">
						<div>8</div>
					</div>
					<div class="col-sm-1">
						<div>9</div>
					</div>
					<div class="col-sm-1">
						<div>10</div>
					</div>
					<div class="col-sm-1">
						<div>11</div>
					</div>
					<div class="col-sm-1">
						<div>12</div>
					</div>
				</div>
			</div>
		</div>
	`);
}

function removeGrid() {
	$('#forh-bs-grid').remove();
}

if ($('body').find('#forh-bs-grid').length === 0) {
	showGrid();
} else {
	removeGrid();
}
