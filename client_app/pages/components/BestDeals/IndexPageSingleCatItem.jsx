export default function IndexPageSingleCatItem(item){
    console.log(item.item);
    return (
        <li className="nav-item flex-shrink-0 flex-lg-shrink-1">
            <a className="nav-link " id="Tpills-two-example1-tab" data-toggle="pill" href="#{item.item.slug}" role="tab" aria-controls="Tpills-two-example1" aria-selected="false">
                <div className="d-md-flex justify-content-md-center align-items-md-center">
                {item.item.title}
                </div>
            </a>
        </li>

        
    )
}