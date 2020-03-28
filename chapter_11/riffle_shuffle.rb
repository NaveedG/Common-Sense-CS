# Write a method that takes two linked lists and puts them together with a riffle shuffle. 
# That is, if you riffle shuffle the following lists: [1, 3, 5, 7] and [2, 4, 6, 8], the resulting list should be [1, 2, 3, 4, 5, 6, 7, 8].

class Node

  attr_accessor :data, :next_node

  def initialize(data)
    @data = data
  end

end

class LinkedList

  attr_accessor :first_node

  def initialize(first_node = nil)
    @first_node = first_node
  end

  def collect_data
    new_arr = []
    current_node = @first_node

    while current_node do
      new_arr.push(current_node)
      current_node = current_node.next_node
    end

    new_arr
  end

end
