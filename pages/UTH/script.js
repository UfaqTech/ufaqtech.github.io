document.addEventListener('DOMContentLoaded', () => {
    const toolData = {
        "Network Security & Monitoring": [
            {
                "name": "Fortinet FortiGate",
                "description": "Commercial Network Firewall. Not directly installable via UHT. Refer to Fortinet documentation.",
                "github_url": null,
                "install_path": null,
                "run_command": "N/A (appliance/platform)",
                "os_compat": ["any"],
                "dependencies": { "default": [] },
                "post_install_commands": [],
                "skip_if_os_not_supported": false
            },
            {
                "name": "Palo Alto Networks Firewall",
                "description": "Commercial Next-Generation Firewall. Refer to Palo Alto Networks documentation.",
                "github_url": null, "install_path": null, "run_command": "N/A (appliance/platform)", "os_compat": ["any"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "Cisco ASA",
                "description": "Commercial Adaptive Security Appliance (Firewall/VPN). Refer to Cisco documentation.",
                "github_url": null, "install_path": null, "run_command": "N/A (appliance/platform)", "os_compat": ["any"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "Check Point Firewall",
                "description": "Commercial Network Security Gateway. Refer to Check Point documentation.",
                "github_url": null, "install_path": null, "run_command": "N/A (appliance/platform)", "os_compat": ["any"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "Sophos XG Firewall",
                "description": "Commercial Next-Generation Firewall. Refer to Sophos documentation.",
                "github_url": null, "install_path": null, "run_command": "N/A (appliance/platform)", "os_compat": ["any"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "Cloudflare WAF",
                "description": "Cloud-based Web Application Firewall. Managed via Cloudflare dashboard.",
                "github_url": null, "install_path": null, "run_command": "N/A (cloud service)", "os_compat": ["any"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "Akamai WAF",
                "description": "Cloud-based Web Application Firewall. Managed via Akamai platform.",
                "github_url": null, "install_path": null, "run_command": "N/A (cloud service)", "os_compat": ["any"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "pfSense",
                "description": "Open source firewall/router software distribution. Typically installed as an OS.",
                "github_url": null, "install_path": null, "run_command": "N/A (OS/firmware)", "os_compat": ["linux"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": true
            },
            {
                "name": "OPNsense",
                "description": "Open source firewall/router software distribution, a fork of pfSense. Typically installed as an OS.",
                "github_url": null, "install_path": null, "run_command": "N/A (OS/firmware)", "os_compat": ["linux"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": true
            },
            {
                "name": "ModSecurity",
                "description": "Open source Web Application Firewall (WAF) engine. Often integrated with Apache/Nginx.",
                "github_url": "https://github.com/owasp-modsecurity/ModSecurity.git", "install_path": "tools/modsecurity", "run_command": "N/A (module)", "os_compat": ["linux"], "dependencies": { "linux": ["apache2", "libapache2-mod-security2"], "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": true
            },
            {
                "name": "Snort",
                "description": "Open Source Intrusion Prevention System (IPS) and Intrusion Detection System (IDS). Requires complex compilation from source or package manager install.",
                "github_url": "https://github.com/snort3/snort3.git", "install_path": "tools/snort3", "run_command": "snort", "os_compat": ["linux", "windows"], "dependencies": { "linux": ["build-essential", "libpcap-dev", "libdaq-dev"], "windows": [], "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": true
            },
            {
                "name": "Suricata",
                "description": "High performance Network IDS, IPS and Network Security Monitoring engine. Requires complex compilation from source or package manager install.",
                "github_url": "https://github.com/OISF/suricata.git", "install_path": "tools/suricata", "run_command": "suricata", "os_compat": ["linux", "windows", "macos"], "dependencies": { "linux": ["build-essential", "libpcap-dev"], "windows": [], "macos": ["suricata"], "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": true
            },
            {
                "name": "Zeek (formerly Bro)",
                "description": "Powerful network analysis framework that transforms network traffic into highly-detailed, scriptable logs. Requires compilation.",
                "github_url": "https://github.com/zeek/zeek.git", "install_path": "tools/zeek", "run_command": "zeek", "os_compat": ["linux", "macos"], "dependencies": { "linux": ["cmake", "make", "gcc", "g++"], "macos": ["cmake"], "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": true
            },
            {
                "name": "Wireshark",
                "description": "The world’s foremost and widely used network protocol analyzer. Download from official site: https://www.wireshark.org/download.html",
                "github_url": null, "install_path": null, "run_command": "wireshark", "os_compat": ["linux", "windows", "macos"], "dependencies": { "linux": ["wireshark"], "windows": ["wireshark"], "macos": ["wireshark"], "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "tcpdump",
                "description": "A powerful command-line packet analyzer. Often pre-installed on Linux/Unix systems.",
                "github_url": null, "install_path": null, "run_command": "tcpdump", "os_compat": ["linux", "termux", "macos"], "dependencies": { "linux": ["tcpdump"], "termux": ["tcpdump"], "macos": ["tcpdump"], "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "Security Onion",
                "description": "Free and open platform for threat hunting, enterprise security monitoring, and log management. Requires dedicated OS installation. Download ISO from official site: https://securityonion.net/",
                "github_url": null, "install_path": null, "run_command": "N/A (OS platform)", "os_compat": ["linux"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": true
            },
            {
                "name": "Cisco Identity Services Engine (ISE)",
                "description": "Commercial Network Access Control (NAC) solution.",
                "github_url": null, "install_path": null, "run_command": "N/A (appliance/platform)", "os_compat": ["any"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "Fortinet FortiNAC",
                "description": "Commercial Network Access Control (NAC) solution.",
                "github_url": null, "install_path": null, "run_command": "N/A (appliance/platform)", "os_compat": ["any"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "OpenVPN",
                "description": "Open-source software application that implements virtual private network (VPN) techniques.",
                "github_url": "https://github.com/OpenVPN/openvpn.git", "install_path": "tools/openvpn", "run_command": "openvpn", "os_compat": ["linux", "termux", "windows", "macos"], "dependencies": { "linux": ["openvpn"], "termux": ["openvpn"], "windows": ["openvpn"], "macos": ["openvpn"], "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "WireGuard",
                "description": "Modern, fast, and secure VPN tunnel.",
                "github_url": "https://github.com/WireGuard/wireguard-linux-compat.git", "install_path": "tools/wireguard", "run_command": "wg", "os_compat": ["linux", "termux", "windows", "macos"], "dependencies": { "linux": ["wireguard"], "termux": ["wireguard"], "windows": ["wireguard"], "macos": ["wireguard"], "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "Cisco Umbrella (OpenDNS)",
                "description": "Cloud security platform that provides DNS-layer security. Managed via web console.",
                "github_url": null, "install_path": null, "run_command": "N/A (cloud service)", "os_compat": ["any"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "Pi-hole",
                "description": "A Linux network-level advertisement and Internet tracker blocking application. Requires Raspberry Pi or Linux server. Installation via official script.",
                "github_url": "https://github.com/pi-hole/pi-hole.git", "install_path": "tools/pi-hole", "run_command": "pihole", "os_compat": ["linux"], "dependencies": { "default": [] }, "post_install_commands": ["cd {{install_path}} && sudo ./install.sh --unattended"], "skip_if_os_not_supported": true
            }
        ],
        "Endpoint Security": [
            {
                "name": "CrowdStrike Falcon",
                "description": "Highly demanded commercial EDR platform. Requires subscription and agent deployment.",
                "github_url": null, "install_path": null, "run_command": "N/A (commercial agent)", "os_compat": ["linux", "windows", "macos"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "Microsoft Defender for Endpoint (XDR)",
                "description": "Microsoft's enterprise endpoint security platform. Part of Microsoft 365 Defender. Built-in or deployed via management tools.",
                "github_url": null, "install_path": null, "run_command": "N/A (built-in/commercial)", "os_compat": ["windows", "macos", "linux"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "SentinelOne", "description": "Commercial AI-powered EDR platform. Requires subscription.", "github_url": null, "install_path": null, "run_command": "N/A (commercial agent)", "os_compat": ["linux", "windows", "macos"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "Carbon Black (VMware)", "description": "Commercial endpoint protection and EDR solution. Requires subscription.", "github_url": null, "install_path": null, "run_command": "N/A (commercial agent)", "os_compat": ["linux", "windows", "macos"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "Sophos Intercept X", "description": "Commercial endpoint protection with EDR and anti-ransomware. Requires subscription.", "github_url": null, "install_path": null, "run_command": "N/A (commercial agent)", "os_compat": ["linux", "windows", "macos"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "Bitdefender GravityZone", "description": "Commercial endpoint security platform. Requires subscription.", "github_url": null, "install_path": null, "run_command": "N/A (commercial agent)", "os_compat": ["linux", "windows", "macos"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "Windows Defender", "description": "Microsoft's built-in antivirus and endpoint protection for Windows.", "github_url": null, "install_path": null, "run_command": "N/A (built-in)", "os_compat": ["windows"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": true
            },
            {
                "name": "Malwarebytes", "description": "Popular anti-malware software. Download from official site: https://www.malwarebytes.com/", "github_url": null, "install_path": null, "run_command": "malwarebytes", "os_compat": ["windows", "macos"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "Avast/AVG", "description": "Popular antivirus software. Download from official sites.", "github_url": null, "install_path": null, "run_command": "N/A (installer)", "os_compat": ["windows", "macos"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "Kaspersky", "description": "Commercial antivirus and internet security suite. Download from official site.", "github_url": null, "install_path": null, "run_command": "N/A (installer)", "os_compat": ["windows", "macos"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "Norton", "description": "Commercial antivirus and internet security suite. Download from official site.", "github_url": null, "install_path": null, "run_command": "N/A (installer)", "os_compat": ["windows", "macos"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "Tripwire", "description": "Commercial File Integrity Monitoring (FIM) solution.", "github_url": null, "install_path": null, "run_command": "N/A (commercial)", "os_compat": ["linux", "windows"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "OSSEC", "description": "Open Source Host-based Intrusion Detection System (HIDS). Complex installation/configuration.", "github_url": "https://github.com/ossec/ossec-hids.git", "install_path": "tools/ossec-hids", "run_command": "ossec-control", "os_compat": ["linux", "macos", "windows"], "dependencies": { "linux": ["build-essential"], "macos": ["build-essential"], "windows": [], "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "Wazuh", "description": "Open Source Security Platform (HIDS, SIEM, XDR capabilities). Complex installation/configuration.", "github_url": "https://github.com/wazuh/wazuh.git", "install_path": "tools/wazuh", "run_command": "wazuh-agentd", "os_compat": ["linux", "windows", "macos"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "Microsoft Intune", "description": "Commercial Mobile Device Management (MDM) and Endpoint Management solution. Cloud service.", "github_url": null, "install_path": null, "run_command": "N/A (cloud service)", "os_compat": ["any"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "Jamf Pro", "description": "Commercial Apple device management (MDM) solution. Cloud service.", "github_url": null, "install_path": null, "run_command": "N/A (cloud service)", "os_compat": ["any"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            }
        ],
        "Vulnerability Scanning": [
            {
                "name": "Nessus", "description": "Proprietary vulnerability scanner developed by Tenable, Inc. Download from official site: https://www.tenable.com/downloads/nessus", "github_url": null, "install_path": null, "run_command": "nessus", "os_compat": ["linux", "windows", "macos"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "OpenVAS / GVM", "description": "Vulnerability management platform with comprehensive scanning and reporting capabilities. Often deployed via Docker. Refer to Greenbone documentation for detailed setup: https://greenbone.github.io/", "github_url": "https://github.com/greenbone/gvmd.git", "install_path": null, "run_command": "gvm-start", "os_compat": ["linux"], "dependencies": { "debian_based_linux": ["openvas"], "default": ["docker"] }, "post_install_commands": [], "skip_if_os_not_supported": true
            },
            {
                "name": "Qualys", "description": "Commercial cloud-based platform for vulnerability management and compliance. Managed via web console.", "github_url": null, "install_path": null, "run_command": "N/A (cloud service)", "os_compat": ["any"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "Nexpose (Rapid7)", "description": "Commercial vulnerability management solution by Rapid7.", "github_url": null, "install_path": null, "run_command": "N/A (platform)", "os_compat": ["any"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "Burp Suite Community Edition", "description": "Integrated platform for performing security testing of web applications. Download from official site: https://portswigger.net/burp/communitydownload Requires Java.", "github_url": null, "install_path": null, "run_command": "burpsuite", "os_compat": ["linux", "windows", "macos"], "dependencies": { "linux": ["java"], "windows": ["java"], "macos": ["java"], "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "OWASP ZAP", "description": "Open Source Web Application Security Scanner. Download from official site or install via package manager for some distros (e.g., 'apt install zaproxy'). Requires Java.", "github_url": null, "install_path": null, "run_command": "zap.sh", "os_compat": ["linux", "windows", "macos"], "dependencies": { "linux": ["java"], "windows": ["java"], "macos": ["java"], "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "Acunetix", "description": "Commercial web vulnerability scanner.", "github_url": null, "install_path": null, "run_command": "N/A (platform)", "os_compat": ["any"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "Invicti (formerly Netsparker)", "description": "Commercial web vulnerability scanner.", "github_url": null, "install_path": null, "run_command": "N/A (platform)", "os_compat": ["any"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            }
        ],
        "Exploitation": [
            {
                "name": "SQLMap", "description": "Automatic SQL injection and database takeover tool.", "github_url": "https://github.com/sqlmapproject/sqlmap.git", "install_path": "tools/sqlmap", "run_command": "python3 sqlmap.py", "os_compat": ["linux", "termux", "windows", "macos"], "dependencies": { "linux": ["python3"], "termux": ["python"], "windows": ["python3"], "macos": ["python3"], "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "Metasploit Framework", "description": "World's most used penetration testing framework. Installation can be lengthy and complex.", "github_url": "https://github.com/rapid7/metasploit-framework.git", "install_path": "tools/metasploit-framework", "run_command": "msfconsole", "os_compat": ["linux", "windows", "macos"], "dependencies": { "debian_based_linux": ["curl", "postgresql"], "windows": ["ruby", "postgresql"], "macos": ["ruby", "postgresql"], "default": [] }, "post_install_commands": ["curl -o msfinstall https://raw.githubusercontent.com/rapid7/metasploit-omnibus/master/config/templates/metasploit-framework-wrappers/msfupdate.erb", "chmod 755 msfinstall", "./msfinstall"], "skip_if_os_not_supported": false
            },
            {
                "name": "Evil-WinRM", "description": "A WinRM shell for pentesters. Requires Ruby and specific gems.", "github_url": "https://github.com/Hackplayers/evil-winrm.git", "install_path": "tools/evil-winrm", "run_command": "ruby evil-winrm.rb", "os_compat": ["linux", "macos"], "dependencies": { "linux": ["ruby"], "macos": ["ruby"], "default": [] }, "post_install_commands": ["gem install winrm winrm-fs rubyntlm rkerberos gssapi_sspi"], "skip_if_os_not_supported": true
            },
            {
                "name": "Pwncat", "description": "Netcat on steroids with a Python reverse shell and advanced features.", "github_url": "https://github.com/calebstewart/pwncat.git", "install_path": "tools/pwncat", "run_command": "python3 -m pwncat", "os_compat": ["linux", "termux", "macos"], "dependencies": { "linux": ["python3", "python3-pip"], "termux": ["python", "python-pip"], "macos": ["python3", "pip"], "default": [] }, "post_install_commands": ["pip3 install -r {{install_path}}/requirements.txt"], "skip_if_os_not_supported": true
            },
            {
                "name": "Cobalt Strike", "description": "Commercial Red Team Operations and APT Simulation platform. Purchase and download from official site: https://www.cobaltstrike.com/", "github_url": null, "install_path": null, "run_command": "N/A (commercial platform)", "os_compat": ["linux", "windows", "macos"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "BloodHound", "description": "Active Directory reconnaissance and path enumeration tool. Requires Neo4j database (manual setup recommended).", "github_url": "https://github.com/BloodHoundAD/BloodHound.git", "install_path": "tools/bloodhound", "run_command": "bloodhound", "os_compat": ["linux", "windows", "macos"], "dependencies": { "linux": ["neo4j"], "windows": ["neo4j"], "macos": ["neo4j"], "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "Immunity Debugger", "description": "A powerful, free debugger for malware analysis and exploit development (Windows only). Download from: https://www.immunityinc.com/products/debugger/", "github_url": null, "install_path": null, "run_command": "ImmunityDebugger.exe", "os_compat": ["windows"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": true
            },
            {
                "name": "OllyDbg", "description": "A 32-bit assembler level analyzing debugger for Microsoft Windows. Download from: http://www.ollydbg.de/", "github_url": null, "install_path": null, "run_command": "ollydbg.exe", "os_compat": ["windows"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": true
            }
        ],
        "Web Hacking": [
            {
                "name": "GoBuster", "description": "Directory/file & DNS busting tool written in Go. Requires Go to be installed.", "github_url": "https://github.com/OJ/gobuster.git", "install_path": "tools/gobuster", "run_command": "./gobuster", "os_compat": ["linux", "termux", "windows", "macos"], "dependencies": { "linux": ["go"], "termux": ["go"], "windows": ["go"], "macos": ["go"], "default": [] }, "post_install_commands": ["cd {{install_path}} && go install"], "skip_if_os_not_supported": false
            },
            {
                "name": "Wfuzz", "description": "Web fuzzer.", "github_url": "https://github.com/xmendez/wfuzz.git", "install_path": "tools/wfuzz", "run_command": "python3 wfuzz.py", "os_compat": ["linux", "termux", "windows", "macos"], "dependencies": { "linux": ["python3", "python3-pip"], "termux": ["python", "python-pip"], "windows": ["python3", "pip"], "macos": ["python3", "pip"], "default": [] }, "post_install_commands": ["pip3 install -r {{install_path}}/requirements.txt"], "skip_if_os_not_supported": false
            },
            {
                "name": "Arjun", "description": "HTTP parameter discovery suite.", "github_url": "https://github.com/s0md3v/Arjun.git", "install_path": "tools/arjun", "run_command": "python3 arjun.py", "os_compat": ["linux", "termux", "windows", "macos"], "dependencies": { "linux": ["python3", "python3-pip"], "termux": ["python", "python-pip"], "windows": ["python3", "pip"], "macos": ["python3", "pip"], "default": [] }, "post_install_commands": ["pip3 install -r {{install_path}}/requirements.txt"], "skip_if_os_not_supported": false
            },
            {
                "name": "W3af", "description": "Web Application Attack and Audit Framework. Requires Python.", "github_url": "https://github.com/andresriancho/w3af.git", "install_path": "tools/w3af", "run_command": "python3 w3af_console", "os_compat": ["linux", "macos"], "dependencies": { "linux": ["python3", "python3-pip"], "macos": ["python3", "pip"], "default": [] }, "post_install_commands": ["pip3 install -r {{install_path}}/requirements.txt"], "skip_if_os_not_supported": true
            },
            {
                "name": "BeEF (Browser Exploitation Framework)", "description": "The Browser Exploitation Framework Project. Requires Ruby.", "github_url": "https://github.com/beefproject/beef.git", "install_path": "tools/beef", "run_command": "beef", "os_compat": ["linux", "macos"], "dependencies": { "linux": ["ruby"], "macos": ["ruby"], "default": [] }, "post_install_commands": ["cd {{install_path}} && bundle install"], "skip_if_os_not_supported": true
            }
        ],
        "Privilege Escalation": [
            {
                "name": "LinPEAS", "description": "Local Linux Privilege Escalation Awesome Script.", "github_url": "https://github.com/carlospolop/PEASS-ng.git", "install_path": "tools/linpeas", "run_command": "bash linpeas.sh", "os_compat": ["linux", "termux"], "dependencies": { "linux": ["bash"], "termux": ["bash"], "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": true
            },
            {
                "name": "WinPEAS", "description": "Local Windows Privilege Escalation Awesome Script.", "github_url": "https://github.com/carlospolop/PEASS-ng.git", "install_path": "tools/winpeas", "run_command": "PowerShell.exe -ExecutionPolicy Bypass -File winPEAS.ps1", "os_compat": ["windows"], "dependencies": { "windows": ["powershell"], "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": true
            },
            {
                "name": "Privilege Escalation Awesome Scripts (PEASS-ng)", "description": "All-in-one suite for local privilege escalation. Contains LinPEAS, WinPEAS etc. See individual scripts for usage. GitHub repo provides source.", "github_url": "https://github.com/carlospolop/PEASS-ng.git", "install_path": "tools/PEASS-ng", "run_command": "N/A (run individual scripts)", "os_compat": ["linux", "windows", "macos", "termux"], "dependencies": { "linux": ["bash"], "windows": ["powershell"], "macos": ["bash"], "termux": ["bash"], "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "GTFOBins", "description": "Curated list of Unix binaries that can be exploited to bypass local security restrictions. Access via web: https://gtfobins.github.io/", "github_url": null, "install_path": null, "run_command": "N/A (web resource)", "os_compat": ["any"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "HackTricks (PrivEsc Section)", "description": "Comprehensive collection of penetration testing and ethical hacking tricks, including privilege escalation techniques. Access via web: https://book.hacktricks.xyz/privilege-escalation", "github_url": null, "install_path": null, "run_command": "N/A (web resource)", "os_compat": ["any"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            }
        ],
        "Payloads": [
            {
                "name": "Msfvenom", "description": "A payload generator, part of Metasploit Framework. Requires Metasploit Framework to be installed.", "github_url": null, "install_path": null, "run_command": "msfvenom", "os_compat": ["linux", "windows", "macos"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "PoshC2", "description": "A powershell C2 framework for Red Teams.", "github_url": "https://github.com/nettitude/PoshC2.git", "install_path": "tools/PoshC2", "run_command": "poshc2", "os_compat": ["linux", "windows"], "dependencies": { "linux": ["python3", "python3-pip", "mono-complete"], "windows": ["python3", "pip", "powershell"], "default": [] }, "post_install_commands": ["pip3 install -r {{install_path}}/requirements.txt"], "skip_if_os_not_supported": false
            }
        ],
        "Wordlists": [
            {
                "name": "SecLists", "description": "A collection of multiple types of lists used during security assessments.", "github_url": "https://github.com/danielmiessler/SecLists.git", "install_path": "wordlists/SecLists", "run_command": "N/A (collection of files)", "os_compat": ["any"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "Rockyou", "description": "A famous wordlist for password cracking. Often included in Kali Linux or can be found online. Decompress if needed (e.g., 'gzip -d rockyou.txt.gz').", "github_url": null, "install_path": "wordlists/rockyou.txt", "run_command": "N/A (file)", "os_compat": ["any"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            }
        ],
        "Phishing": [
            {
                "name": "SocialFish", "description": "Phishing Tool and Social Engineering Tool.", "github_url": "https://github.com/UndeadSec/SocialFish.git", "install_path": "tools/SocialFish", "run_command": "python3 SocialFish.py", "os_compat": ["linux", "termux"], "dependencies": { "linux": ["python3", "php"], "termux": ["python", "php"], "default": [] }, "post_install_commands": ["pip3 install -r {{install_path}}/requirements.txt"], "skip_if_os_not_supported": true
            },
            {
                "name": "Setoolkit (Social-Engineer Toolkit)", "description": "Open-source penetration testing framework designed for social engineering.", "github_url": "https://github.com/trustedsec/social-engineer-toolkit.git", "install_path": "tools/setoolkit", "run_command": "setoolkit", "os_compat": ["linux", "windows", "macos"], "dependencies": { "linux": ["python3", "python3-pip"], "windows": ["python3", "pip"], "macos": ["python3", "pip"], "default": [] }, "post_install_commands": ["pip3 install -r {{install_path}}/requirements.txt"], "skip_if_os_not_supported": false
            },
            {
                "name": "GoPhish", "description": "Open-source phishing framework. Download from GitHub releases or official site.", "github_url": "https://github.com/gophish/gophish.git", "install_path": "tools/gophish", "run_command": "./gophish", "os_compat": ["linux", "windows", "macos"], "dependencies": { "linux": ["go"], "windows": ["go"], "macos": ["go"], "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            }
        ],
        "Password Cracking": [
            {
                "name": "John the Ripper", "description": "Fast password cracker. Requires compilation from source. Refer to official documentation for build instructions: https://www.openwall.com/john/", "github_url": "https://github.com/openwall/john.git", "install_path": "tools/john", "run_command": "john", "os_compat": ["linux", "termux", "windows", "macos"], "dependencies": { "linux": ["build-essential", "libssl-dev"], "termux": ["clang", "libssl-dev"], "windows": ["mingw-w64"], "macos": ["john-jumbo"], "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "Hashcat", "description": "World's fastest and most advanced password recovery utility. GPU-accelerated. Download from official site: https://hashcat.net/hashcat/", "github_url": null, "install_path": null, "run_command": "hashcat", "os_compat": ["linux", "windows", "macos"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "Hydra", "description": "A very fast network logon cracker which supports numerous protocols to attack.", "github_url": "https://github.com/vanhauser-thc/thc-hydra.git", "install_path": "tools/hydra", "run_command": "hydra", "os_compat": ["linux", "termux", "macos"], "dependencies": { "linux": ["libssl-dev", "libssh-dev", "libidn11-dev", "libpcre3-dev", "libncursesw5-dev", "libtool", "automake", "autoconf"], "termux": ["libssl-dev", "libssh-dev", "libidn-dev", "libpcre-dev", "ncurses-utils", "libtool", "automake", "autoconf"], "macos": ["hydra"], "default": [] }, "post_install_commands": ["cd {{install_path}} && ./configure && make && sudo make install"], "skip_if_os_not_supported": true
            }
        ],
        "Wireless Hacking": [
            {
                "name": "Aircrack-ng", "description": "A complete suite of tools to assess WiFi network security.", "github_url": "https://github.com/aircrack-ng/aircrack-ng.git", "install_path": "tools/aircrack-ng", "run_command": "aircrack-ng", "os_compat": ["linux", "termux", "macos"], "dependencies": { "linux": ["build-essential", "libpcap-dev", "libssl-dev", "libnl-3-dev", "libnl-genl-3-dev"], "termux": ["build-essential", "libpcap-dev", "libssl-dev"], "macos": ["aircrack-ng"], "default": [] }, "post_install_commands": ["cd {{install_path}} && autoreconf -i && ./configure --with-libnl && make && sudo make install && sudo airodump-ng-oui-update"], "skip_if_os_not_supported": true
            }
        ],
        "SIEM & SOAR": [
            {
                "name": "Splunk Enterprise Security", "description": "Industry-leading commercial SIEM platform. Requires Splunk Enterprise.", "github_url": null, "install_path": null, "run_command": "N/A (platform)", "os_compat": ["any"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "IBM QRadar", "description": "Commercial SIEM platform by IBM.", "github_url": null, "install_path": null, "run_command": "N/A (platform)", "os_compat": ["any"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "Microsoft Sentinel", "description": "Cloud-native SIEM and SOAR solution by Microsoft Azure. Managed via Azure portal.", "github_url": null, "install_path": null, "run_command": "N/A (cloud service)", "os_compat": ["any"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "Elastic SIEM (Elastic Stack)", "description": "Open-source SIEM capabilities built on the Elastic Stack (Elasticsearch, Kibana, Beats). Requires Java. Download from official site: https://www.elastic.co/downloads", "github_url": null, "install_path": null, "run_command": "N/A (suite of services)", "os_compat": ["linux", "windows", "macos"], "dependencies": { "default": ["java"] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "ArcSight (Micro Focus)", "description": "Commercial SIEM platform.", "github_url": null, "install_path": null, "run_command": "N/A (platform)", "os_compat": ["any"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "LogRhythm", "description": "Commercial SIEM and security analytics platform.", "github_url": null, "install_path": null, "run_command": "N/A (platform)", "os_compat": ["any"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "Wazuh (Open Source HIDS/SIEM)", "description": "Open Source Security Platform (HIDS, SIEM, XDR capabilities). Complex installation/configuration.", "github_url": "https://github.com/wazuh/wazuh.git", "install_path": "tools/wazuh", "run_command": "wazuh-agentd", "os_compat": ["linux", "windows", "macos"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "Palo Alto Networks Cortex XSOAR", "description": "Commercial Security Orchestration, Automation, and Response (SOAR) platform.", "github_url": null, "install_path": null, "run_command": "N/A (platform)", "os_compat": ["any"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "Splunk SOAR (formerly Phantom)", "description": "Commercial Security Orchestration, Automation, and Response (SOAR) platform by Splunk.", "github_url": null, "install_path": null, "run_command": "N/A (platform)", "os_compat": ["any"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "IBM Resilient", "description": "Commercial Security Orchestration, Automation, and Response (SOAR) platform by IBM.", "github_url": null, "install_path": null, "run_command": "N/A (platform)", "os_compat": ["any"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "Swimlane", "description": "Commercial Security Orchestration, Automation, and Response (SOAR) platform.", "github_url": null, "install_path": null, "run_command": "N/A (platform)", "os_compat": ["any"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            }
        ],
        "Identity and Access Management (IAM)": [
            {
                "name": "Okta", "description": "Commercial Identity Provider (IdP) and Single Sign-On (SSO) solution. Cloud service.", "github_url": null, "install_path": null, "run_command": "N/A (cloud service)", "os_compat": ["any"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "Microsoft Azure Active Directory / Entra ID", "description": "Microsoft's cloud-based identity and access management service. Cloud service.", "github_url": null, "install_path": null, "run_command": "N/A (cloud service)", "os_compat": ["any"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "Ping Identity", "description": "Commercial Identity Provider (IdP) and access management solution. Cloud service.", "github_url": null, "install_path": null, "run_command": "N/A (cloud service)", "os_compat": ["any"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "Auth0 (Okta)", "description": "Commercial Identity Provider (IdP) and authentication/authorization platform. Cloud service.", "github_url": null, "install_path": null, "run_command": "N/A (cloud service)", "os_compat": ["any"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "Duo Security (MFA)", "description": "Commercial multi-factor authentication (MFA) solution. Cloud service.", "github_url": null, "install_path": null, "run_command": "N/A (cloud service)", "os_compat": ["any"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "CyberArk", "description": "Commercial Privileged Access Management (PAM) solution.", "github_url": null, "install_path": null, "run_command": "N/A (platform)", "os_compat": ["any"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "Delinea (formerly Thycotic and Centrify)", "description": "Commercial Privileged Access Management (PAM) solution.", "github_url": null, "install_path": null, "run_command": "N/A (platform)", "os_compat": ["any"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "BeyondTrust", "description": "Commercial Privileged Access Management (PAM) solution.", "github_url": null, "install_path": null, "run_command": "N/A (platform)", "os_compat": ["any"], "dependencies": { "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            },
            {
                "name": "HashiCorp Vault", "description": "Open-source tool for managing secrets and protecting sensitive data. Complex setup required. Download official binaries or build from source.", "github_url": "https://github.com/hashicorp/vault.git", "install_path": "tools/vault", "run_command": "vault", "os_compat": ["linux", "windows", "macos"], "dependencies": { "linux": ["go"], "windows": ["go"], "macos": ["go"], "default": [] }, "post_install_commands": [], "skip_if_os_not_supported": false
            }
        ]
    };

    const categoryNav = document.getElementById('category-nav');
    const toolGrid = document.getElementById('tool-grid');
    const toolCountEl = document.getElementById('tool-count');
    const currentCategoryTitle = document.getElementById('current-category-title');
    const searchInput = document.getElementById('search-input');
    const osFilterButtons = document.querySelectorAll('.os-filter-btn');
    const noResults = document.getElementById('no-results');
    const clearFiltersBtn = document.getElementById('clear-filters-btn');
    
    const modal = document.getElementById('tool-modal');
    const modalContent = document.getElementById('modal-content');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    // Sidebar elements
    const sidebarToggleBtn = document.getElementById('sidebar-toggle-btn');
    const mainContainer = document.querySelector('.main-container');
    const sidebar = document.querySelector('.sidebar');

    let state = {
        category: 'All',
        osFilters: [],
        searchQuery: ''
    };

    const osIcons = {
        linux: '🐧',
        windows: '🪟',
        macos: '🍏',
        termux: '📱',
        any: '🌐'
    };

    function renderCategories() {
        let navHTML = `<a href="#" class="sidebar-link block px-4 py-2 text-sm rounded-md hover:bg-slate-700 transition active" data-category="All">All Tools</a>`;
        Object.keys(toolData).forEach(category => {
            navHTML += `<a href="#" class="sidebar-link block px-4 py-2 text-sm rounded-md hover:bg-slate-700 transition" data-category="${category}">${category}</a>`;
        });
        categoryNav.innerHTML = navHTML;
    }

    function renderTools() {
        let filteredTools = [];
        const allTools = Object.values(toolData).flat();

        if (state.category === 'All') {
            filteredTools = allTools;
        } else {
            filteredTools = toolData[state.category] || [];
        }

        // Apply search filter
        if (state.searchQuery) {
            const query = state.searchQuery.toLowerCase();
            filteredTools = filteredTools.filter(tool => 
                tool.name.toLowerCase().includes(query) || 
                tool.description.toLowerCase().includes(query)
            );
        }

        // Apply OS filter
        if (state.osFilters.length > 0) {
            filteredTools = filteredTools.filter(tool => {
                const compat = tool.os_compat || [];
                return state.osFilters.every(os => compat.includes(os) || compat.includes('any'));
            });
        }

        toolGrid.innerHTML = '';
        if (filteredTools.length > 0) {
            noResults.classList.add('hidden');
            toolGrid.classList.remove('hidden');
            filteredTools.forEach(tool => {
                const card = document.createElement('div');
                card.className = 'tool-card bg-white rounded-lg shadow-sm border border-slate-200 p-5 flex flex-col transition duration-300';
                card.addEventListener('click', () => openModal(tool));
                
                let isInstallable = tool.github_url && tool.install_path;
                let typeChip = isInstallable ? `<div class="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Installable</div>` : `<div class="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Manual/Web</div>`;

                card.innerHTML = `
                    <div class="flex-grow">
                        <div class="flex justify-between items-start mb-2">
                            <h4 class="text-lg font-bold text-slate-900 cursor-pointer hover:text-teal-600">${tool.name}</h4>
                            ${typeChip}
                        </div>
                        <p class="text-slate-600 text-sm mb-4 leading-relaxed">${tool.description.substring(0, 100)}${tool.description.length > 100 ? '...' : ''}</p>
                    </div>
                    <div class="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-100">
                        <span>OS Compatibility</span>
                        <div class="flex items-center gap-2">
                            ${(tool.os_compat || []).map(os => `<span title="${os}" class="text-base">${osIcons[os] || '❓'}</span>`).join('')}
                        </div>
                    </div>
                `;
                toolGrid.appendChild(card);
            });
        } else {
            noResults.classList.remove('hidden');
            toolGrid.classList.add('hidden');
        }

        toolCountEl.textContent = `${filteredTools.length} tools found`;
    }

    function openModal(tool) {
        modalTitle.textContent = tool.name;
        
        const dependenciesHTML = Object.entries(tool.dependencies || {}).map(([os, deps]) => {
            if (deps.length === 0) return '';
            return `<div class="flex items-start">
                        <span class="font-semibold w-28">${os.replace(/_/g, ' ')}:</span>
                        <div class="flex flex-wrap gap-2">${deps.map(dep => `<code class="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded">${dep}</code>`).join('')}</div>
                    </div>`;
        }).join('');

        const postInstallHTML = (tool.post_install_commands || []).map(cmd => 
            `<div class="flex items-center gap-2">
                <code class="flex-grow bg-slate-100 text-slate-700 text-xs p-2 rounded">${cmd}</code>
                ${createCopyButton(cmd)}
            </div>`
        ).join('');
        
        let githubLinkHTML = tool.github_url ? `<a href="${tool.github_url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-teal-600 hover:underline">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                View on GitHub
            </a>` : `<p class="text-slate-500">No GitHub repository.</p>`;

        modalBody.innerHTML = `
            <p class="text-slate-700 leading-relaxed">${tool.description}</p>
            <div class="space-y-4 pt-4 border-t border-slate-200">
                ${githubLinkHTML}
                <div>
                    <h4 class="font-semibold mb-2">Run Command:</h4>
                    <div class="flex items-center gap-2">
                        <code class="flex-grow bg-slate-100 text-slate-700 text-xs p-2 rounded">${tool.run_command}</code>
                        ${createCopyButton(tool.run_command)}
                    </div>
                </div>
                <div>
                    <h4 class="font-semibold mb-2">OS Compatibility:</h4>
                    <div class="flex flex-wrap gap-2">
                        ${(tool.os_compat || []).map(os => `<span class="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">${osIcons[os] || '❓'} ${os}</span>`).join('')}
                    </div>
                </div>
                <div>
                    <h4 class="font-semibold mb-2">System Dependencies:</h4>
                    <div class="space-y-2">${dependenciesHTML || '<p class="text-sm text-slate-500">None specified.</p>'}</div>
                </div>
                <div>
                    <h4 class="font-semibold mb-2">Post-Install Commands:</h4>
                    <div class="space-y-2">${postInstallHTML || '<p class="text-sm text-slate-500">None specified.</p>'}</div>
                </div>
            </div>
        `;
        modal.classList.remove('hidden');
        setTimeout(() => {
            modalContent.classList.remove('scale-95', 'opacity-0');
        }, 10);
    }

    function closeModal() {
        modalContent.classList.add('scale-95', 'opacity-0');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }
    
    function createCopyButton(textToCopy) {
        return `<button class="copy-btn p-2 bg-slate-200 rounded hover:bg-slate-300 transition" data-text="${textToCopy}">
                    <svg class="copy-btn-icon text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                </button>`;
    }

    function handleCopyClick(e) {
        const button = e.target.closest('.copy-btn');
        if (!button) return;

        const textToCopy = button.dataset.text;
        document.execCommand('copy'); // Use execCommand for clipboard access in iframe
        
        const originalIcon = button.innerHTML;
        button.innerHTML = `<span class="text-sm copied-text">Copied!</span>`;
        setTimeout(() => {
            button.innerHTML = originalIcon;
        }, 1500);
    }

    function handleCategoryClick(e) {
        e.preventDefault();
        const target = e.target.closest('.sidebar-link');
        if (!target) return;
        
        document.querySelectorAll('.sidebar-link').forEach(link => link.classList.remove('active'));
        target.classList.add('active');
        
        state.category = target.dataset.category;
        currentCategoryTitle.textContent = state.category;
        renderTools();
        // Close sidebar on category click for mobile
        if (window.innerWidth <= 768) {
            toggleSidebar();
        }
    }
    
    function handleOsFilterClick(e) {
        const button = e.target;
        const os = button.dataset.os;

        button.classList.toggle('active');

        if (state.osFilters.includes(os)) {
            state.osFilters = state.osFilters.filter(item => item !== os);
        } else {
            state.osFilters.push(os);
        }
        renderTools();
    }

    function handleSearchInput(e) {
        state.searchQuery = e.target.value;
        renderTools();
    }
    
    function handleClearFilters() {
        state.category = 'All';
        state.osFilters = [];
        state.searchQuery = '';
        searchInput.value = '';
        osFilterButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.sidebar-link').forEach(link => link.classList.remove('active'));
        document.querySelector('.sidebar-link[data-category="All"]').classList.add('active');
        currentCategoryTitle.textContent = 'All Tools';
        renderTools();
    }

    // Sidebar toggle function
   function toggleSidebar() {
    mainContainer.classList.toggle('sidebar-closed');

    if (window.innerWidth <= 768) {
        mainContainer.classList.toggle('sidebar-open-mobile');
    } else {
        mainContainer.classList.toggle('sidebar-open-desktop');
    }
}


    // Event Listeners
    categoryNav.addEventListener('click', handleCategoryClick);
    searchInput.addEventListener('input', handleSearchInput);
    osFilterButtons.forEach(button => button.addEventListener('click', handleOsFilterClick));
    modalCloseBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    });
    modalBody.addEventListener('click', handleCopyClick);
    clearFiltersBtn.addEventListener('click', handleClearFilters);
    sidebarToggleBtn.addEventListener('click', toggleSidebar); // New event listener for sidebar toggle

    // Initial Render
    renderCategories();
    renderTools();

    // Adjust sidebar on window resize for responsiveness
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            mainContainer.classList.remove('sidebar-closed', 'sidebar-open-mobile');
        } else {
            // On mobile, ensure sidebar is initially closed unless explicitly opened
            if (!mainContainer.classList.contains('sidebar-open-mobile')) {
                mainContainer.classList.add('sidebar-closed');
            }
        }
    });

    // Initial check for mobile view to hide sidebar by default
    if (window.innerWidth <= 768) {
        mainContainer.classList.add('sidebar-closed');
    }
      if (window.innerWidth >= 768) {
        mainContainer.classList.add('sidebar-closed');
    }
});
