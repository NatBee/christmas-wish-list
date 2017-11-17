var $item = $('#item');
var $price = $('#item-price');
var $submit = $('.submit-button');
var $wishList = $('.wish-list');

$submit.on('click', addToWishList)

function addToWishList() {
	event.preventDefault();
	$wishList.append('<ul class="wish-item"><li>ITEM: ' + $item.val() + '</li>' + '<li>PRICE: $' + $price.val() + '</li>' +
		'<span class="list-btns"><div class="total">Total</div><div class="delete">Delete</div><div class="purchased">Purchased</div></span></ul>')
}