import { makeAutoObservable } from "mobx";

export default class CourseStore {
  constructor() {
    this._types = []
    this._areas = []
    this._courses = []
    this._baskets = []
    this._selectedType = {}
    this._selectedArea = {}
    this._page = 1
    this._totalCount = 0
    this._limit = 6 //количество товаров на одной странице
    makeAutoObservable(this)
  }

  setTypes(types) {
    this._types = types
  }

  setCourses(courses) {
    this._courses = courses
  }

  setAreas(areas) {
    this._areas = areas
  }

  setSelectedArea(area) {
    this.setPage(1)
    this._selectedArea = area
  }

  setSelectedType(type) {
    this.setPage(1)
    this._selectedType = type
  }

  setPage(page) {
    this._page = page
  }
  setTotalCount(count) {
    this._totalCount = count
  }

  setBaskets(basket) {
    this._baskets = basket
  }

  get types() {
    return this._types
  }

  get courses() {
    return this._courses
  }

  get basket() {
    return this._baskets
}

  get areas() {
    return this._areas
  }

  get selectedArea() {
    return this._selectedArea
  }

  get selectedType() {
    return this._selectedType
  }

  get totalCount() {
    return this._totalCount
  }

  get page() {
    return this._page
  }

  get limit() {
    return this._limit
  }
}
