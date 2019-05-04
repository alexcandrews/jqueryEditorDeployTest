console.log('\'Allo \'Allo!');
var editor = new $.fn.dataTable.Editor({
  table: '#testTable',
  fields: [{
    label: 'Item Description',
    name: 'itemDescription'
  }, {
    label: 'Quantity',
    name: 'quantity'
  }]
});
var balloonCatalogItems = [{ itemDescription: 'item', quantity: 5 }]
var testTable = $('#testTable').DataTable({
  data: balloonCatalogItems,
  dom: 'frtipB',
  responsive: true,
  searching: false,
  paging: false,
  info: false,
  ordering: false,
  columnDefs: [{
    defaultContent: '',
    targets: '_all'
  }],
  columns: [
    { title: 'item', 'data': 'itemDescription' },
    { title: 'quantity', 'data': 'quantity' }
  ],
  buttons: [
    { extend: 'create', editor: editor },
    { extend: 'edit', editor: editor },
    { extend: 'remove', editor: editor },
  ],
  'order': [[1, 'asc']]
});

// editor
//   .on('create', function (e, json, data) {
//     var eventData = $.Home.$selectedEvent;
//     var balloonCatalogItems = $.EventDetails.$balloonCatalogItemsDataTable.rows().data().toArray()
//     eventData['balloonCatalogItems'] = balloonCatalogItems;
//     $.HTTP.updateEvent(eventData, function (event) {
//       $.Util.success('Updated Event');
//       $.Home.$selectedEvent = eventData;
//     }, function (error) {
//       $.Util.error('Error updating Event');
//     });
//   })
//   .on('edit', function (e, json, data, id) {
//     var eventData = $.Home.$selectedEvent;
//     var balloonCatalogItems = $.EventDetails.$balloonCatalogItems.rows().data().toArray()
//     eventData['balloonCatalogItems'] = balloonCatalogItems;
//     $.HTTP.updateEvent(eventData, function (event) {
//       $.Util.success('Updated Event');
//       $.Home.$selectedEvent = eventData;
//     }, function (error) {
//       $.Util.error('Error updating Event');
//     });
//   })
//   .on('remove', function (e, json, ids) {
//     var eventData = $.Home.$selectedEvent;
//     var balloonCatalogItems = $.EventDetails.$balloonCatalogItems.rows().data().toArray()
//     eventData['balloonCatalogItems'] = balloonCatalogItems;
//     $.HTTP.updateEvent(eventData, function (event) {
//       $.Util.success('Updated Event');
//       $.Home.$selectedEvent = eventData;
//     }, function (error) {
//       $.Util.error('Error updating Event');
//     });
//   })

// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });
