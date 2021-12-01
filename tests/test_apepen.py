from brownie import ApePen ,accounts, config, network


def test_can_create_ape_pen_contract():
    dev = accounts[0]
    apePen = ApePen.deploy(
        5000,
        {"from": dev},
        publish_source=False
    )
    assert apePen.getTotalMinted() == 0


def test_can_create_and_mint():
    dev = accounts[0]
    apePen = ApePen.deploy(
        5000,
        {"from": dev},
        publish_source=False
    )
    assert apePen.getTotalMinted() == 0
    apePen.mintNFT(dev, "", {"from": dev, "amount": 10000000000000000})
    assert apePen.getTotalMinted() == 1

def test_can_create_mint_and_withdraw():
    dev = accounts[0]
    apePen = ApePen.deploy(
        5000,
        {"from": dev},
        publish_source=False
    )
    assert apePen.getTotalMinted() == 0
    apePen.mintNFT(dev, "", {"from": dev, "amount": 10000000000000000})
    assert apePen.getTotalMinted() == 1
    apePen.withdraw({"from": dev})
    assert apePen.balance() == 0

def test_only_owner_can_withdraw():
    dev = accounts[0]
    alt = accounts[1]
    apePen = ApePen.deploy(
        5000,
        {"from": dev},
        publish_source=False
    )
    assert apePen.getTotalMinted() == 0
    apePen.mintNFT(dev, "", {"from": dev, "amount": 10000000000000000})
    assert apePen.getTotalMinted() == 1
    try:
        apePen.withdraw({"from": alt})
    except:
        assert(True)
    else:
        assert(False)

def test_does_not_mint_more_than_max():
    dev = accounts[0]
    apePen = ApePen.deploy(
        1,
        {"from": dev},
        publish_source=False
    )
    assert apePen.getTotalMinted() == 0
    apePen.mintNFT(dev, "", {"from": dev, "amount": 10000000000000000})
    assert apePen.getTotalMinted() == 1
    try:
        apePen.mintNFT(dev, "", {"from": dev, "amount": 10000000000000000})
    except:
            assert(True)
    else:
            assert(False)
    

