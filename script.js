var $item = $('#item');
var $price = $('#item-price');
var $submit = $('.submit-button');
var $wishList = $('.wish-list');

$('input').on('keyup', enableSubmit);
$submit.on('click', addToWishList);

function enableSubmit() {
	if($item.val() === '' && $price.val() !== '') {
		$submit.prop('disabled', true);
	}
	else if($item.val() !== '' && $price.val() === '') {
		$submit.prop('disabled', true);
	}
	else {
		$submit.prop('disabled', false);
	}
}

function addToWishList() {
	event.preventDefault();
	var id = $.now();
	$wishList.append('<ul id="${id}" class="wish-item"><li>ITEM: ' + $item.val() + '</li>' + '<li>PRICE: $' + $price.val() + '</li>' +
		'<li>DESIRE: like</li>' +
		'<span class="list-btns"><div class="total">Total</div><div class="delete">Delete</div><div class="purchased">Purchased</div></span></ul>')
	$item.val('');
	$price.val('');
	$item.focus();
}