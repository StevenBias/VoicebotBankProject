/*global define*/
define(['jquery'], function ($) {
	'use strict';
	$.fn.protectForm = function (opts) {
		var defaultOptions = {
			type: 'POST'
		}, protectFormData = 'protect-form-submitted';

		return this.each(function () {
			$(this).data(protectFormData, false).on('submit', function (e) {
				e.preventDefault();
				var $form = $(this),
					 options = $.extend(true, {}, defaultOptions, opts),
					 ajaxOptions, dfd;
				options.url = options.url || $form.attr('action');
				if ($form.data(protectFormData)) {
					return;
				}
				$form.data(protectFormData, true);
				if (options.before) {
					options.before.apply($form[0]);
				}

				ajaxOptions = {
					url: options.url,
					type: options.type
				};
				if (options.type === 'POST') {
					ajaxOptions.data = $form.serialize();
				}
				dfd = $.ajax(ajaxOptions).always(function () {
					$form.data(protectFormData, false);
				});
				$.each(['done', 'fail', 'always'], function (i, e) {
					if (options[e]) {
						dfd[e](options[e]);
					}
				});

			});
		});
	};

	return function (context, selector, options) {
		$(selector, context).protectForm(options);
	};

});
