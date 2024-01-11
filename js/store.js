class Store { constructor() { this.state = {}; this.subs = []; } setState(s) { Object.assign(this.state, s); this.subs.forEach(f => f(this.state)); } }
