+++
title = "KreatyveBot #1"
date = 2024-08-13T07:10:08Z
lastmod = 2024-08-13T07:10:08Z
author = "Kayte Studio"
categories = ["macOS"]
tags = ["codermag archive"]
originalUrl = "https://codermag.gleentech.com/2024/08/13/kreatyvebot-1/"
+++

### Introduction

``` git
git clone https://github.com/ringsce/kreatyveBot.git
```

This article explores a simple IRC bot written in Perl. The bot connects to an IRC server, joins specific channels, and listens for commands issued by its owner. With this guide, you’ll understand how the bot operates, the purpose of each section of the script, and how it can be customized or extended for various uses.

### Overview of the Script

The script uses the Perl language and standard libraries to interact with an IRC server. It includes features such as detecting installed programs, running shell commands, managing channel operations (like kicking or banning users), and executing scripts. Let’s break down the script step by step.

### Setting Up the Environment

The script begins with a standard shebang line and the inclusion of necessary Perl modules:

``` perl
#!/usr/bin/perl
use strict;
use warnings;
use IO::Socket;
```

- **`#!/usr/bin/perl`**: Tells the system to execute the script using Perl.
- **`use strict; use warnings;`**: Enforces good programming practices, helping to avoid common mistakes.
- **`use IO::Socket;`**: Imports the IO::Socket module, which provides networking capabilities necessary for connecting to the IRC server.

### Configuring Server and User Variables

Next, the script defines several variables to configure the bot’s connection to the IRC server:

``` perl
my $server   = "irc.libera.chat";
my $port     = 6667;
my $nick     = "KreatyveBot";
my $ident    = "Anonymous";
my $realname = "Anonymous";
my $chan     = "#channel1";
my $chan2    = "#channel2";
my $pass     = "";
my $su       = "nickname";
my $owners   = "nickname";
```

- **`$server` and `$port`**: Define the IRC server’s address and port.
- **`$nick`, `$ident`, and `$realname`**: Set the bot’s nickname, identification, and real name as they will appear on IRC.
- **`$chan` and `$chan2`**: Specify the channels the bot will join.
- **`$pass`**: Placeholder for the NickServ password (if authentication is required).
- **`$su` and `$owners`**: Designate the nickname(s) of the bot’s superuser or owner, who can issue privileged commands.

### Connecting to the IRC Server

The script then establishes a connection to the IRC server:

``` perl
my $irc = IO::Socket::INET->new(
    PeerAddr => $server,
    PeerPort => $port,
    Proto    => 'tcp'
) or die "Unable to connect to server: $!";
```

- **`IO::Socket::INET->new(...)`**: Creates a new TCP socket connection to the IRC server using the provided address and port. If the connection fails, the script will terminate with an error message.

### Logging into the IRC Server

Once connected, the bot identifies itself and joins the specified channels:

``` perl
print "$nick has connected to $server on $chan and $chan2\n";
print $irc "USER $ident $ident $ident $ident :$realname\n";
print $irc "NICK $nick\n";
print $irc "JOIN $chan\n";
print $irc "JOIN $chan2\n";
```

- **`print $irc "USER ..."`** and **`print $irc "NICK ..."`**: Send the USER and NICK commands to the IRC server, setting the bot’s identification and nickname.
- **`print $irc "JOIN $chan"`**: Commands the bot to join the specified channels.

### Command Center Notification and Utility Functions

The bot notifies the owner of its presence and checks for certain installed programs:

``` perl
print $irc "PRIVMSG $owners :I AM SCORPION'S BIGGEST FAN\n";
my $output = `whoami`;
print $irc "PRIVMSG $owners : $output\n";

sub program_exists {
    my $program = shift;
    foreach my $path (split /:/, $ENV{PATH}) {
        if (-x "$path/$program") {
            return 1;
        }
    }
    return 0;
}
```

- **`PRIVMSG $owners`**: Sends a private message to the bot’s owner.
- **`whoami`**: Executes the `whoami` command to determine the current user and reports it to the owner.
- **`program_exists`**: A subroutine that checks if a specific program exists in the system’s PATH by iterating over the directories listed in `$ENV{PATH}`.

### Command Handling Loop

The script enters an infinite loop to continuously listen for incoming messages from the server:

``` perl
while (my $in = <$irc>) {
    if ($in =~ /^PING(.*)/) {
        print $irc "PONG $1\n";
    }

    print "$in\n"; # Log all incoming messages
    next unless $in =~ /^:$owners\b/;
```

- **`$in = <$irc>`**: Reads each line of input from the IRC server.
- **`/^PING(.*)/`**: Responds to server PING requests to keep the connection alive.
- **`/^:$owners\b/`**: Ensures that commands are only executed if they originate from the bot’s owner.

### Executing Commands

The bot can execute a variety of commands, such as retrieving the current user (`!whoami`), listing network interfaces (`!ifconfig`), and more:

``` perl
if ($in =~ /!whoami/) {
    $output = `whoami`;
    print $irc "PRIVMSG $owners : $output\n";
}

if ($in =~ /!ifconfig/) {
    my @output = `ifconfig | grep inet`;
    foreach my $line (@output) {
        print $irc "PRIVMSG $owners : $line\n";
    }
}

if ($in =~ /!command\s+(.*)/) {
    my @output = `$1`;
    foreach my $line (@output) {
        print $irc "PRIVMSG $owners : $line\n";
    }
}
```

- **`!whoami`**: Executes the `whoami` command and sends the output to the owner.
- **`!ifconfig`**: Runs `ifconfig` to retrieve network interface information and sends each line of output to the owner.
- **`!command`**: Allows the owner to execute arbitrary shell commands and receive the output.

### Additional Functionalities

The bot supports various IRC operations, including:

- **`!op` and `!deop`**: Grant or revoke operator privileges.
- **`!kickban`, `!ban`, and `!kick`**: Manage user bans and kicks.
- **`!say`**: Send a message to the channel.
- **`!quit`**: Quit the IRC server.
- **`!nick`**: Change the bot’s nickname.
- **`!restart`**: Restart the bot.
- **`!users`**: Display the current admins.
- **`!get`**: Open a donation URL in the browser.
- **`!run`**: Run specific Perl or compiled Pascal scripts.

### Handling Topics and Quitting

The script also includes commands to update the channel topic and to quit gracefully:

``` perl
if ($in =~ /!topic\s+(.*)/) {
    my $topic = $1;
    print $irc "TOPIC $chan :$topic\n";
    print $irc "TOPIC $chan2 :$topic\n";
}

if ($in =~ /!quit/ && $in =~ /$su/) {
    print $irc "PRIVMSG $chan :I'LL BE BACK FOR YOU\n";
    print $irc "QUIT\n";
    last;
}
```

- **`!topic`**: Updates the topic for the specified channels.
- **`!quit`**: Exits the IRC server and stops the bot.

### Closing the Connection

Finally, the bot closes the connection to the IRC server:

``` perl
close($irc);
```

### Conclusion

This Perl script provides a basic yet powerful foundation for an IRC bot, capable of handling commands, executing scripts, and interacting with users on the IRC network. By understanding each section of the script, you can customize it to suit your needs, adding new features or modifying existing ones to create a fully functional IRC bot tailored to your requirements.
