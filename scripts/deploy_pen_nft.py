from brownie import ApePen, accounts, network, config

def main():
    dev = accounts.add(config['wallets']['from_key'])
    print(network.show_active())
    print(dev)
    publish_source = True
    apePen = ApePen.deploy(
        5000,
        {"from": dev},
        publish_source=publish_source
    )
