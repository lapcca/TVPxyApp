'use strict';
'require form';
'require view';

return view.extend({
	render: function () {
		var m, s, o;

		m = new form.Map('tvpxy', _('tvpxy'),
			_('TVPxy is a light-weight proxy server. It can retrieve the RTP streams and forward it to internal LAN over HTTP.'));

		s = m.section(form.TypedSection, 'tvpxy');
		s.anonymous = true;
		s.addremove = true;

		o = s.option(form.Flag, 'enabled', _('Enabled'));
		o.enabled = '0';
		o.disabled = '1';
		o.default = o.disabled;
		o.rmempty = false;

		o = s.option(form.Value, 'port', _('Listen Port'));
		o.datatype = 'port';

		o = s.option(form.Value, 'netdev', _('RTP Source IP/Interface'));
		o.datatype = 'or(ipaddr, network)';

		return m.render();
	}
});
