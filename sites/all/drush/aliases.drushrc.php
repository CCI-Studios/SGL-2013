<?php

$aliases['dev'] = array(
	'uri'=> 'sgl.ccistaging.com',
	'root' => '/home/staging/subdomains/sgl/public_html',
	'remote-host'=> 'ccistaging.com',
	'remote-user'=> 'staging',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files',
	),

	'ssh-options' => "-p 37241",
);