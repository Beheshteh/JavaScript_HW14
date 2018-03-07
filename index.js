var $tbody = document.querySelector('tbody');

// addressData comes from the addressData.js file
var filteredAddresses = dataSet;

// renderTable renders the filteredAddresses to the tbody
function renderTable() {
  $tbody.innerHTML = '';
  
  for (var i = 0; i <filteredAddresses.length ; i++) {
    // Get get the current address object and its fields
    var address = filteredAddresses[i];
    console.log(address)
    var fields = Object.keys(address);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = address[field];
    }
  }
}

// used the dataTable feautres to do search over columns and pagination
function filterColumn ( i ) {
  $('#myTable').DataTable().column( i ).search( 
      $('#col'+i+'_filter').val(),
     
  ).draw();
}

$(document).ready(function() {
  $('#myTable').DataTable();



  $('input.form-control').on( 'keyup click', function () {
      filterColumn( $(this).parents('div').attr('data-column') );
  } );
} );

renderTable();


