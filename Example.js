var commandInfo = {
    cancelMessage: true,
    description: 'Example',//介紹
    usage: [
        'example yyds',//用法
    ]
};

function execute(chatmsg, args, Minecraft) {
	const sender = chatmsg.sender.name;

    let O = ['yyds'];//偵測: -example yyds
	
	if(!args.length || O.includes(args[0])) {
    Minecraft.Commands.run(`say hi`)
	}
};

export { commandInfo, execute };
