"InitAllLansaevalRepo.ps1"

For ( $i = 310; $i -le 310; $i++) {
    Write-Output( "lansaeval$($i)")
    # git remote add lansaeval$($i) git@github.com:lansa/lansaeval$($i).git
    git remote get-url lansaeval$($i)
    git push --force lansaeval$($i)
    Write-Output( "*********************************************")
}