function showGrid() {
	$('body').append(`
		<div id="forh-bs-grid" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 1000000; pointer-events: none;">
			<div class="container" style="height: 100%;">
				<div class="row" style="height: 100%;">
					<div class="col-xs-1" style="height: 100%; background-color: rgba(111, 84, 153, 0.2); position: relative">
						<div style="background-color: rgba(111, 84, 153, 0.2); height: 100%;"></div>
					</div>
					<div class="col-xs-1" style="height: 100%; background-color: rgba(111, 84, 153, 0.2); position: relative">
						<div style="background-color: rgba(111, 84, 153, 0.2); height: 100%;"></div>
					</div>
					<div class="col-xs-1" style="height: 100%; background-color: rgba(111, 84, 153, 0.2); position: relative">
						<div style="background-color: rgba(111, 84, 153, 0.2); height: 100%;"></div>
					</div>
					<div class="col-xs-1" style="height: 100%; background-color: rgba(111, 84, 153, 0.2); position: relative">
						<div style="background-color: rgba(111, 84, 153, 0.2); height: 100%;"></div>
					</div>
					<div class="col-xs-1" style="height: 100%; background-color: rgba(111, 84, 153, 0.2); position: relative">
						<div style="background-color: rgba(111, 84, 153, 0.2); height: 100%;"></div>
					</div>
					<div class="col-xs-1" style="height: 100%; background-color: rgba(111, 84, 153, 0.2); position: relative">
						<div style="background-color: rgba(111, 84, 153, 0.2); height: 100%;"></div>
					</div>
					<div class="col-xs-1" style="height: 100%; background-color: rgba(111, 84, 153, 0.2); position: relative">
						<div style="background-color: rgba(111, 84, 153, 0.2); height: 100%;"></div>
					</div>
					<div class="col-xs-1" style="height: 100%; background-color: rgba(111, 84, 153, 0.2); position: relative">
						<div style="background-color: rgba(111, 84, 153, 0.2); height: 100%;"></div>
					</div>
					<div class="col-xs-1" style="height: 100%; background-color: rgba(111, 84, 153, 0.2); position: relative">
						<div style="background-color: rgba(111, 84, 153, 0.2); height: 100%;"></div>
					</div>
					<div class="col-xs-1" style="height: 100%; background-color: rgba(111, 84, 153, 0.2); position: relative">
						<div style="background-color: rgba(111, 84, 153, 0.2); height: 100%;"></div>
					</div>
					<div class="col-xs-1" style="height: 100%; background-color: rgba(111, 84, 153, 0.2); position: relative">
						<div style="background-color: rgba(111, 84, 153, 0.2); height: 100%;"></div>
					</div>
					<div class="col-xs-1" style="height: 100%; background-color: rgba(111, 84, 153, 0.2); position: relative">
						<div style="background-color: rgba(111, 84, 153, 0.2); height: 100%;"></div>
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