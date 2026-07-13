export default function DistributionChart({ history }) {

  const categories = [
    "Complaint",
    "Inquiry",
    "Feedback",
    "Request",
    "Appreciation",
    "Other",
  ];

  const counts = {};

  categories.forEach(c => counts[c] = 0);

  history.forEach(item => {
    if(counts[item.category] !== undefined)
      counts[item.category]++;
  });

  return (

<div className="distribution">

<h2>📈 Session Distribution</h2>

{
categories.map(category=>{

const count=counts[category];

const percent=
history.length===0
?0
:(count/history.length)*100;

return(

<div
className="dist-row"
key={category}
>

<div className="dist-label">

{category}

</div>

<div className="dist-track">

<div
className="dist-fill"
style={{
width:`${percent}%`
}}
/>

</div>

<div className="dist-count">

{count}

</div>

</div>

);

})
}

</div>

);

}