import json
import re
import os

DATA_FILE = 'js/data.js'
# List of bad filenames identified from script and download logs
bad_files = [
    "11_H1200_20x_8_1_e7a0753ab6.png", "136_7e9648a374.png", "13_10x_8_2_cd10d2ee58.png",
    "17_6f219e8678.png", "1_10_b6fba615d1.png", "1_1_b91388ce64.png", "207_9c721d6dc8.png",
    "208_444986d560.png", "21_10x_1_cd5362a59d.png", "22_10x_1_bd7b3a69bc.png",
    "234_8c54e0ba6a.png", "235_94496f96a9.png", "236_c82929e1f9.png", "237_1_a769d648bf.png",
    "25_1fa39309a7.png", "269_9701380706.png", "270_3a583db742.png", "2_aa51f7a9dd.png",
    "302_417c8acc1c.png", "342_1_7cdee36ce2.png", "3_6b73c6332d.png", "5_68569a6fa9.png",
    "5_H1200_20x_8_1_e12da1046f.png", "5_H1200_20x_8_2_fdc944f88c.png", "5_H1200_20x_8_3_a3e3050150.png",
    "6_H1200_20x_8_1_44c3d5abe2.png", "8_H1200_20x_8_1_cebe990003.png", 
    "CH_8500_CRP_6e5e64b3f7_9cefcfcdd9.jpeg", "CH_8500_CRP_EN_3c24c30341_ed46414a44.webp",
    "CH_8600_CRP_f954f6cfd3_337584ea32.jpeg", "comen-a5-a7.jpg", 
    "EN_CH_8600_CRP_ac91199483_693ba0323f.jpeg", "fiber_optic_icon_a2dd491122.png",
    "full_chain_0ef9130279.png", "image_png_2_851c7fd3eb.png", "image_png_a27715a6ad.png",
    "pic3_112be4437a.png", "pic7_76f55aa900.png", "sect1_item1_b5632f983c.png",
    "sect1_item2_de4596c176.png", "sect1_item3_e264134c71.png", "sect1_item4_0d8ea89b85.png",
    "3_3_1_fac8bba1bc.png", "8_f3d48827af.png", "image_3_bcf4380c9c.png", "3_2_1_4_bc63b9841d.png"
]

with open(DATA_FILE, 'r', encoding='utf-8') as f:
    lines = f.readlines()

out_lines = []
for line in lines:
    skip = False
    for bad in bad_files:
        if bad in line:
            skip = True
            break
    
    # Also skip empty "points:" images in advancedSections (which we just want to remove completely, but let's just do line by line string match)
    if not skip:
        out_lines.append(line)

with open(DATA_FILE, 'w', encoding='utf-8') as f:
    f.writelines(out_lines)

print(f"Removed {len(lines) - len(out_lines)} lines containing bad images.")
