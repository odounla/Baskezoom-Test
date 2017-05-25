$("#example-table").tabulator({
  height:"300px",
  fitColumns:true,
  columns:[
    {title:"Rank", field:"id",sortable:true, sorter:"number"},
    {title:"Name", field:"name"},
    {title:"Club", field:"gender"},
   /* {title:"Favourite Color", field:"col", sortable:false},
    {title:"Date Of Birth", field:"dob"},
    {title:"Cheese Preference", field:"cheese"},*/
  ],
});

var sampleData= [
    {id:1, name:"Oli Bob", gender:"Chicago"},
  {id:2, name:"Mary May", gender:"Chicage"},
  {id:3, name:"Christine Lobowski", gender:"Fap"},
  {id:4, name:"Brendon Philips", gender:"BVB"},
  {id:5, name:"Margret Marmajuke", gender:"BVB"},
]

$("#example-table").tabulator("setData", sampleData);

$(window).resize(function(){
  $("#example-table").tabulator("redraw");
});
