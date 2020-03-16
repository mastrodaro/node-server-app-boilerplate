class ExampleModel {
  constructor() {
    this.data = [
      { id: 1, value: 1 },
      { id: 2, value: 2 }
    ];
  }

  getAll() {
    return this.data;
  }

  get(id) {
    return this.data.find(o => o.id === id);
  }
}

export default new ExampleModel();
