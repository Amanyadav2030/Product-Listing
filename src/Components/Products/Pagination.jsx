function Pagination({total,page,handlePage}) {
  const onclick =(update)=>{
      const newpage = update+page;
      handlePage(newpage);
  }
  const prev = <button data-testid="prev-page" disabled={page===1} onClick={()=>onclick(-1)} >PREV</button>;
  const currentPage = <button data-testid="current-page" >{page}</button>;
  const next = <button data-testid="next-page" disabled={page===total} onClick={()=>onclick(+1)}>NEXT</button>;
  const totalPagesElem = (
    <div className="Total"> 
      Total Pages: <b data-testid="total-pages">{total}</b>{" "}
    </div>
  );
  return (
    <div data-testid="pagination-container" id="buttons">
      {prev}
      {currentPage}
      {next}
      {totalPagesElem}
    </div>
  );
}

export default Pagination;
