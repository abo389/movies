let header = document.querySelector("header");
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let links = document.querySelectorAll( ".navbar a" );

menuIcon.onclick = () => {
  navbar.classList.toggle("active");
  navbar.classList.toggle("opacity-[0]");
}
window.onscroll = () => {
  navbar.classList.remove("active");
}
window.addEventListener('scroll', () => {
  header.classList.toggle( "shadow", window.scrollY > 0 );
  if ( header.classList.contains( "shadow" ) )
  {
    header.classList.add( "shadow-ld", "bg-white" )
    header.children[0].classList.add('text-black')
    header.children[1].classList.add('text-black')
    links.forEach(link => link.classList.add("!text-black"))
  }
  else
  {
    header.classList.remove( "shadow-ld", "bg-white" )
    header.children[ 0 ].classList.remove( 'text-black' );
    header.children[ 1 ].classList.remove( 'text-black' );
    links.forEach( link => link.classList.remove( "!text-black" ) )
  }
});