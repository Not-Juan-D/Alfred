import Column from "./Column.js";

export default class Kanban {
	constructor(root) {
		this.root = root;

		Kanban.columns().forEach(column => {
			const columnView = new Column(column.id, column.title);

			this.root.appendChild(columnView.elements.root);
		});
	}

	static columns() {
		return [
			{
				id: 0,
				title: "URGENT / less important"
			},
			{
				id: 1,
				title: "URGENT / IMPORTANT"
			},
			{
				id: 2,
				title: "less urgent / less important"
			},
			{
				id: 3,
				title: "less urgent / IMPORTANT"
			}
		];
	}
}
