// # Images -> Must Match # in imgs folder
const numImgs = 99

// # Rows per page
const rows = 4

// Calculates # Full Pages... FullPages + 1 = Total Pages
const FullPages = imgsPerPage => (numImgs - numImgs % imgsPerPage) / imgsPerPage

// Background Color
const bg = '#f1f1f3'

export {numImgs, rows, FullPages, bg}